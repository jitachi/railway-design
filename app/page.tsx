"use client";

import Link from "next/link";
import CardsAgainstBadQuality from "./components/project-images/CardsAgainstBadQuality";
import HowToBuildAPage from "./components/project-images/HowToBuildAPage";
import SharedDefinitionOfQuality from "./components/project-images/SharedDefinitionOfQuality";
import Branding from "./components/project-images/Branding";
import OnConsideration from "./components/project-images/OnConsideration";

// Project data
const projects = [
  {
    title: "On Consideration",
    description: "Why consideration is the foundation of good design",
    href: "/on-consideration",
    image: <OnConsideration />,
    disabled: false,
  },
  {
    title: "Cards against bad quality",
    description: "Something something about our principles",
    href: "/cards",
    image: <CardsAgainstBadQuality />,
    disabled: false,
  },
  {
    title: "Website Guidelines",
    description: "Something something about our principles",
    href: "/how-to-build-a-page",
    image: <HowToBuildAPage />,
    disabled: false,
  },
  {
    title: "Shared definition of quality",
    description: "Something something about our principles",
    href: "#",
    image: <SharedDefinitionOfQuality />,
    disabled: true,
  },
  {
    title: "Branding",
    description: "Something something about our principles",
    href: "#",
    image: <Branding />,
    disabled: true,
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#DDDBD9",
        padding: "24px",
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "8px 8px",
      }}
    >
      <div
        className="w-full h-full p-12"
        style={{
          backgroundColor: "#E7E5E3",
          borderRadius: "8px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
          width: "100%",
          height: "100%",
          minHeight: "calc(100vh - 48px)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            {/* Railway Logo */}
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
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
              Design
            </h1>
          </div>

          {/* Divider */}
          <div
            className="mb-8"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className={`group block ${
                  project.disabled ? "cursor-not-allowed" : ""
                }`}
                style={project.disabled ? { opacity: 0.5 } : {}}
                onClick={
                  project.disabled ? (e) => e.preventDefault() : undefined
                }
              >
                {/* Title and Description */}
                <h2
                  className={`text-base font-semibold text-gray-900 mb-1 transition-opacity ${
                    project.disabled
                      ? "group-hover:opacity-70"
                      : "group-hover:underline"
                  }`}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {project.description}
                </p>

                {/* Image/SVG */}
                <div
                  className="w-full rounded-lg group-hover:opacity-90 transition-opacity overflow-hidden"
                  style={{
                    backgroundColor: project.disabled
                      ? "rgba(0, 0, 0, 0.04)"
                      : "rgba(0, 0, 0, 0.08)",
                    border: project.disabled
                      ? "2px dashed rgba(0, 0, 0, 0.08)"
                      : "none",
                    maxHeight: "240px",
                    height: "240px",
                  }}
                >
                  {project.image ? (
                    <div className="w-full h-full">{project.image}</div>
                  ) : (
                    <div className="w-full h-full bg-transparent" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
