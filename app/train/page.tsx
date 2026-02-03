"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function TrainPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f0ef);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      2000
    );
    camera.position.set(-40, 25, 60);
    camera.lookAt(-100, 5, 0);

    // Renderer with logarithmic depth buffer to prevent z-fighting
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Orbit controls for panning
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.minDistance = 30;
    controls.maxDistance = 150;
    controls.target.set(-100, 5, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Main sun light
    const sunLight = new THREE.DirectionalLight(0xfffaf0, 1.2);
    sunLight.position.set(50, 100, 30);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Secondary fill light
    const fillLight = new THREE.DirectionalLight(0xf0f8ff, 0.4);
    fillLight.position.set(-30, 40, -20);
    scene.add(fillLight);

    // Infinite grid ground (black lines)
    const gridHelper = new THREE.GridHelper(10000, 500, 0x000000, 0x333333);
    scene.add(gridHelper);

    // Solid ground underneath grid (light)
    const groundGeometry = new THREE.PlaneGeometry(10000, 10000);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0xfafafa,
      roughness: 1,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Train track (simple placeholder) - much longer
    const trackGeometry = new THREE.BoxGeometry(2000, 0.1, 2);
    const trackMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const track = new THREE.Mesh(trackGeometry, trackMaterial);
    track.position.y = 0.05;
    scene.add(track);

    // Train group (will hold the model or placeholder)
    const trainGroup = new THREE.Group();
    trainGroup.position.set(-100, 0, 0); // Start behind camera
    scene.add(trainGroup);

    // Load the Shinkansen model (GLTF/GLB)
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      "/models/shinkansen/shinkansen.glb",
      (gltf) => {
        console.log("GLTF loaded!");
        const object = gltf.scene;

        // Get bounding box
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        console.log("Model size:", size.x, size.y, size.z);
        console.log("Model center:", center.x, center.y, center.z);

        // Scale to fit scene (bigger)
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 100 / maxDim;
        object.scale.setScalar(scale);

        // Center at origin
        object.position.set(
          -center.x * scale,
          -center.y * scale + 2,
          -center.z * scale
        );

        // Rotate to align with track
        object.rotation.y = Math.PI / 2;

        // Enable shadows on all meshes
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Add to trainGroup so it moves with animation
        trainGroup.add(object);
        console.log("Train added to scene!");
        setLoading(false);
      },
      (progress) => {
        if (progress.total > 0) {
          console.log(
            "Loading:",
            ((progress.loaded / progress.total) * 100).toFixed(1),
            "%"
          );
        }
      },
      (err) => {
        console.error("Error loading GLTF:", err);
        createPlaceholderTrain();
      }
    );

    // Placeholder train if model doesn&apos;t load
    const createPlaceholderTrain = () => {
      const bodyGeometry = new THREE.BoxGeometry(8, 2, 2);
      const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 1.5;
      body.castShadow = true;
      trainGroup.add(body);

      // Nose cone
      const noseGeometry = new THREE.ConeGeometry(1, 3, 4);
      const noseMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const nose = new THREE.Mesh(noseGeometry, noseMaterial);
      nose.rotation.z = -Math.PI / 2;
      nose.position.set(5.5, 1.5, 0);
      nose.castShadow = true;
      trainGroup.add(nose);

      // Blue stripe
      const stripeGeometry = new THREE.BoxGeometry(8.1, 0.3, 2.1);
      const stripeMaterial = new THREE.MeshStandardMaterial({
        color: 0x0066cc,
      });
      const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
      stripe.position.y = 1.5;
      trainGroup.add(stripe);

      setLoading(false);
      setError(
        "Model not found. Showing placeholder. Add shinkansen.glb to /public/models/shinkansen/"
      );
    };

    // Track camera offset for manual orbiting
    let lastTrainX = trainGroup.position.x;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move train along track
      trainGroup.position.x += 0.5;

      // Loop back when too far
      if (trainGroup.position.x > 800) {
        trainGroup.position.x = -800;
        lastTrainX = -800;
      }

      // How much the train moved this frame
      const deltaX = trainGroup.position.x - lastTrainX;
      lastTrainX = trainGroup.position.x;

      // Move camera along with train (preserves manual orbit position)
      camera.position.x += deltaX;

      // OrbitControls target follows train
      controls.target.set(trainGroup.position.x, 5, 0);

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 3D Scene Container - Full viewport */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        {loading && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(241, 240, 239, 0.9)" }}
          >
            <p className="text-gray-600">Loading 3D scene...</p>
          </div>
        )}
      </div>

      {/* Floating Header */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{ padding: "24px" }}
      >
        <div
          style={{
            backgroundColor: "rgba(241, 240, 239, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
            padding: "16px 24px",
            maxWidth: "fit-content",
          }}
        >
          <div className="flex items-center gap-3">
            <Link href="/">
              <svg
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45.8145 33.9521C42.0252 42.2343 33.6829 48 23.9746 48C7.77693 47.7555 2.14169 34.0288 2.11035 33.9521H45.8145ZM23.9746 0C37.2436 0.000109469 48.0002 10.7508 48 24.0098C47.9977 26.5692 47.5844 29.1123 46.7764 31.541H1.27832C0.982736 30.6187 0.784825 29.7825 0.782227 29.7715H34.1133C36.2427 29.7715 38.002 28.682 38.8193 26.8555C39.7073 24.8679 39.3314 22.7929 38.0254 20.9883C36.6127 19.0372 34.2429 16.2984 32.6016 15.0576C29.5778 12.7699 25.7349 12.4343 22.6084 12.3301L21.7109 12.2969C20.2613 12.2364 19.9852 12.2031 12.5645 12.2031V12.2061H12.5635C12.5635 12.2061 6.2852 12.2091 3.06152 12.2158C7.18662 4.92919 14.9981 0 23.9746 0ZM36.7471 25.3916C36.4723 26.4557 35.6258 27.3134 34.1143 27.3135H0.205078C0.117655 26.6816 0.0569871 26.0407 0.0185547 25.3916H36.7471ZM12.5576 14.6123C18.9227 14.6123 20.0074 14.6393 21.6064 14.7051C26.4026 14.9096 29.7555 14.2113 35.9883 22.2637C36.1607 22.483 36.3317 22.7075 36.459 22.9561H0C0.0341962 22.1473 0.108319 21.3404 0.222656 20.5391H19.3877V18.1064H0.704102C0.923341 17.1128 1.37398 15.891 1.84082 14.6309C5.44734 14.6213 9.15093 14.6123 12.5576 14.6123Z"
                  fill="#1C1A28"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 tracking-tight hover:opacity-70"
            >
              Design
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-xl font-semibold text-gray-900 tracking-tight">
              Train Experiment
            </span>
          </div>
        </div>
      </div>

      {/* Error/Info message */}
      {error && (
        <div
          className="absolute bottom-6 left-6 z-10 p-4 rounded-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      )}
    </div>
  );
}
