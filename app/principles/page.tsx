"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PrincipleCard from "./PrincipleCard";

// Card data array - can be expanded to 30+ cards
const cardsData = [
  {
    category: "1. CLEAR",
    categoryNumber: 1,
    totalCards: 4,
    themeColor: "#E07A4F",
    categoryTitle: "Place",
    principleStatement: "Follow user workflow, not system structure",
    questions: [
      {
        question: "Is this where users would naturally look for it?",
        answer:
          "Consider their mental model. Map where they'd logically look based on current context.",
      },
      {
        question: "Can users discover this when they need it?",
        answer:
          "Even if it's not where they first look, are there clear visual cues or logical paths to find it?",
      },
      {
        question: "Are we organizing by our convenience or theirs?",
        answer:
          "Question internal logic. Just because it's easier to maintain doesn't mean it's better for users.",
      },
      {
        question: "Are frequently used items placed prominently?",
        answer:
          "Prime placement should go to high-frequency actions and information.",
      },
      {
        question: "Are we prioritizing 'clean' over findable?",
        answer: "The finest work is wasted if users can't find it.",
      },
    ],
  },
  {
    category: "1. CLEAR",
    categoryNumber: 2,
    totalCards: 4,
    themeColor: "#E07A4F",
    categoryTitle: "Clarity",
    principleStatement: "Turn system complexity into user confidence",
    questions: [
      {
        question: "Are we using the fewest words while staying clear?",
        answer: "Prioritize brevity without sacrificing comprehension.",
      },
      {
        question: "Does the system clearly indicate what's happening?",
        answer:
          "Loading states, processing indicators, current mode/state should be obvious without guessing.",
      },
      {
        question: "Can users predict what will happen before they act?",
        answer:
          "Button labels, link destinations, and action outcomes should be clear before users commit to them.",
      },
      {
        question: "Does the system give appropriate feedback for actions?",
        answer:
          "Feedback should match the significance of the action that triggered it.",
      },
      {
        question: "Is the communication timing appropriate?",
        answer:
          "Information appears when users need it, not too early (overload) or too late (confusion).",
      },
    ],
  },
  {
    category: "1. CLEAR",
    categoryNumber: 3,
    totalCards: 4,
    themeColor: "#E07A4F",
    categoryTitle: "Purposeful Composition",
    principleStatement: "Arrange elements with clear intent and visual harmony",
    questions: [
      {
        question: "Does visual hierarchy show what's most important?",
        answer:
          "Users should be able to scan and immediately grasp priority and relationships.",
      },
      {
        question: "Does the composition guide attention naturally?",
        answer:
          "Eye flow should feel smooth and purposeful, not chaotic or disperse.",
      },
      {
        question: "Does every element feel intentionally placed?",
        answer:
          "Nothing should feel randomly positioned or like an afterthought.",
      },
      {
        question: "Is spacing purposeful and consistent?",
        answer: "Spacing should create clear groupings and breathing room.",
      },
      {
        question: "Does visual weight match the actual importance of elements?",
        answer:
          "Make important things look important through size, color, or contrast.",
      },
    ],
  },
  {
    category: "1. CLEAR",
    categoryNumber: 4,
    totalCards: 4,
    themeColor: "#E07A4F",
    categoryTitle: "Minimalism",
    principleStatement: "Remove everything non-essential to reveal clarity",
    questions: [
      {
        question: "Can we remove this without hurting the user experience?",
        answer: "If the answer is yes, it probably shouldn't be there.",
      },
      {
        question:
          "Is this competing for attention with more important elements?",
        answer:
          "Secondary elements shouldn't distract from primary actions and information.",
      },
      {
        question: "Are we keeping this because it's useful or might be?",
        answer: "If it's not solving a proven problem, consider removing it.",
      },
      {
        question: "Are we showing only what users need for their current task?",
        answer:
          "Hide advanced options, secondary actions, and contextual irrelevant items.",
      },
      {
        question: "Can this be simplified further without losing meaning?",
        answer:
          "Rethink the approach to create the same meaning with fewer elements or visual cues.",
      },
    ],
  },
];

// PRECISE category cards
const preciseCardsData = [
  {
    category: "2. PRECISE",
    categoryNumber: 1,
    totalCards: 3,
    themeColor: "#D9B85C",
    categoryTitle: "Accurate Representation",
    principleStatement:
      "Interface should accurately represent capabilities, state, and behavior.",
    questions: [
      {
        question:
          "Do visual cues and button labels accurately represent what will actually happen?",
        answer:
          "Visual appearance and labels should match actual functionality.",
      },
      {
        question:
          "Are disabled or unavailable actions clearly indicated upfront?",
        answer:
          "Users shouldn't have to click to find out something is disabled.",
      },
      {
        question:
          "Does the interface behave consistently with user expectations based on appearance?",
        answer:
          "Visual design should predict behavior = no surprises after clicking.",
      },
      {
        question:
          "Are user permissions clearly reflected in the available interface options?",
        answer:
          "Different user roles should see appropriately filtered capabilities.",
      },
    ],
  },
  {
    category: "2. PRECISE",
    categoryNumber: 2,
    totalCards: 3,
    themeColor: "#D9B85C",
    categoryTitle: "Spatial Continuity",
    principleStatement:
      "Maintain visual connection between interface states to preserve user context",
    questions: [
      {
        question:
          "When users navigate across different tabs, do they return to the previous context?",
        answer:
          "Preserve scroll position, selections, and filters when switching between tabs.",
      },
      {
        question:
          "Do interface changes maintain user orientation and show clear progression?",
        answer:
          "Users should never lose track of where they are or what they were originally doing.",
      },
      {
        question: "Are we morphing elements rather than stacking layers?",
        answer: "Transform existing elements instead of adding new ones.",
      },
      {
        question:
          "Do modal dialogs maintain visual relationship to their trigger?",
        answer:
          "Show connection between the action that opened the modal and the modal itself.",
      },
    ],
  },
  {
    category: "2. PRECISE",
    categoryNumber: 3,
    totalCards: 3,
    themeColor: "#D9B85C",
    categoryTitle: "Physical authenticity",
    principleStatement:
      "Interface elements that reference the physical world should behave realistically",
    questions: [
      {
        question:
          "Are shadows sized and blurred according to realistic elevation?",
        answer:
          "Higher elements cast larger, softer shadows; closer elements have smaller, sharper shadows.",
      },
      {
        question: "Do elements have smooth entrance and exit transitions?",
        answer:
          "Avoid jarring pops - elements should ease in and out naturally.",
      },
      {
        question:
          "Are we animating only what's necessary and avoiding repetitive, tiring effects?",
        answer: "Don't animate the same elements every time users return.",
      },
      {
        question: "Do interface changes feel smooth rather than abrupt?",
        answer:
          "State changes, reveals, and updates should have appropriate transition timing.",
      },
    ],
  },
];

// EFFICIENT category cards
const efficientCardsData = [
  {
    category: "3. EFFICIENT",
    categoryNumber: 3,
    totalCards: 3,
    themeColor: "#5BC4B0",
    categoryTitle: "Progressive disclosure",
    principleStatement: "Show only what's needed, when it's needed",
    questions: [
      {
        question: "Are we showing only what's needed now?",
        answer:
          "Keep the interface focused by surfacing only the elements required for the current task or decision.",
      },
      {
        question: "Is the first view clean and unintimidating?",
        answer:
          "The first step should feel approachable, with complexity hidden until needed.",
      },
      {
        question: "Are we preventing decision paralysis by limiting options?",
        answer: "Keep option sets small to maintain decision momentum.",
      },
      {
        question: "Are rarely used options tucked away without feeling buried?",
        answer:
          "Hide low-frequency features without making them impossible to find when users actually need them.",
      },
      {
        question: "Can we collapse less important details?",
        answer:
          "Keep non-crucial details accessible but not visible by default.",
      },
    ],
  },
  {
    category: "3. EFFICIENT",
    categoryNumber: 1,
    totalCards: 3,
    themeColor: "#5BC4B0",
    categoryTitle: "Effort Reduction",
    principleStatement: "Infer what you can, ask only what you must",
    questions: [
      {
        question: "Are we asking for data we can detect or calculate?",
        answer:
          "Understand user intent and context from their actions rather than asking them to explicitly provide it.",
      },
      {
        question:
          "Can we auto-complete this based on common patterns or user history?",
        answer:
          "Learn from user behavior and common inputs to suggest completions and reduce typing effort.",
      },
      {
        question:
          "Can we guess the most likely choice and let users override if needed?",
        answer:
          "Default to the most probable option based on context, patterns, or user history rather than forcing selection.",
      },
      {
        question:
          "Are we asking for confirmation when the action is easily reversible?",
        answer:
          "Skip confirmation dialogs for actions that can be undone and save confirmations for destructive or irreversible operations.",
      },
    ],
  },
  {
    category: "3. EFFICIENT",
    categoryNumber: 2,
    totalCards: 3,
    themeColor: "#5BC4B0",
    categoryTitle: "Step Minimization",
    principleStatement: "More steps mean fewer completions",
    questions: [
      {
        question: "Can we combine related actions into a single interaction?",
        answer:
          "Group related functions so users can accomplish multiple things in one action rather than separate steps.",
      },
      {
        question:
          "Can we enable direct manipulation instead of multi-step workflows?",
        answer:
          "Allow users to drag, click, or edit directly rather than going through menus and dialog boxes.",
      },
      {
        question:
          "Can we eliminate steps by making reasonable assumptions about user goals?",
        answer:
          "Skip unnecessary choices by defaulting to what users typically want, letting them override if needed.",
      },
      {
        question:
          "Can we reduce the number of decisions users must make to complete tasks?",
        answer:
          "Minimize choice points and decision fatigue by handling routine decisions automatically.",
      },
    ],
  },
];

// DURABLE category cards
const durableCardsData = [
  {
    category: "4. DURABLE",
    categoryNumber: 3,
    totalCards: 3,
    themeColor: "#5A9BC9",
    categoryTitle: "Reversible Actions",
    principleStatement: "Make mistakes fixable rather than preventable",
    questions: [
      {
        question: "Do we offer 'soft delete' periods before permanent removal?",
        answer: "Give users time to change their mind after deletion actions.",
      },
      {
        question: "Do we use undo instead of confirmation dialogs?",
        answer: "Give users time to change their mind after deletion actions.",
      },
      {
        question: "Can users go back to how things were before?",
        answer:
          "Provide clear restoration paths to previous states and configurations.",
      },
    ],
  },
  {
    category: "4. DURABLE",
    categoryNumber: 1,
    totalCards: 3,
    themeColor: "#5A9BC9",
    categoryTitle: "Error Recovery",
    principleStatement: "Turn error states into recovery opportunities",
    questions: [
      {
        question:
          "Can users understand why something failed and what to do about it?",
        answer:
          "Explain the cause clearly and provide specific actions to resolve the issue.",
      },
      {
        question: "Can users preview potential errors before they occur?",
        answer:
          "Show warnings or validation that help users course-correct proactively.",
      },
      {
        question:
          "Can users retry failed actions without re-entering all their information or restart from zero?",
        answer:
          "Keep user data intact during error recovery and retry attempts",
      },
      {
        question:
          "Do we help users build better habits through error feedback?",
        answer:
          "Use errors as learning opportunities to improve user patterns.",
      },
    ],
  },
  {
    category: "4. DURABLE",
    categoryNumber: 2,
    totalCards: 3,
    themeColor: "#5A9BC9",
    categoryTitle: "Resilience",
    principleStatement: "Make experimentation safe and consequence-free",
    questions: [
      {
        question:
          "Do interface elements respond predictably to unexpected user interactions?",
        answer:
          "Edge case interactions shouldn't cause crashes, errors, or broken states.",
      },
      {
        question:
          "Can users experiment with new features without fear of damaging their data?",
        answer:
          "Exploration should feel safe. Users shouldn't worry about losing work or settings",
      },
      {
        question:
          "Does the interface handle incomplete or partial user input gracefully?",
        answer:
          "Work with users who save drafts, leave forms half-filled, or work incrementally.",
      },
    ],
  },
];

// DELIGHTFUL category cards
const delightfulCardsData = [
  {
    category: "5. DELIGHTFUL",
    categoryNumber: 1,
    totalCards: 3,
    themeColor: "#6B4DB8",
    categoryTitle: "Ingenuity",
    principleStatement:
      "I haven't seen this before, but it makes perfect sense.",
    questions: [
      {
        question: "Does it feel inventive without trying too hard?",
        answer:
          "Cleverness should feel effortless and natural, never forced or gimmicky.",
      },
      {
        question: "Is the idea obvious in hindsight?",
        answer:
          "Smart solutions often feel like they were always meant to be there once you experience them in context.",
      },
      {
        question: "Would this make someone say 'oh wow' and 'of course'?",
        answer:
          "Deliver surprise and clarity in the same moment, creating a sense of inevitable brilliance.",
      },
      {
        question: "Would users immediately understand the benefit?",
        answer:
          "The value should be clear at a glance, no explanation needed to make sense of the change.",
      },
      {
        question: "Would this approach inspire future improvements?",
        answer:
          "Great ingenuity often sparks new ways of thinking and sets a higher bar across the system.",
      },
    ],
  },
  {
    category: "5. DELIGHTFUL",
    categoryNumber: 2,
    totalCards: 3,
    themeColor: "#6B4DB8",
    categoryTitle: "Iconic",
    principleStatement: "Work that stands out instantly and lasts over time.",
    questions: [
      {
        question: "Would this inspire someone?",
        answer:
          "Excellence perpetuates itself. You're creating what once pushed you to aim higher.",
      },
      {
        question: "Is this a benchmark of your craft?",
        answer:
          "The result should feel worthy of being the standard you share with the world.",
      },
      {
        question:
          "Would we look back and say this was the highest standard we could reach at the time?",
        answer:
          "It should reflect the very best we could deliver with the knowledge, tools, and insight available.",
      },
      {
        question: "Is this pushing the limits of what we can build right now?",
        answer:
          "The work should explore the edge of what's possible without compromising reliability.",
      },
      {
        question: "Would this make someone say, 'I wish I'd built that'?",
        answer: "The ultimate compliment of undeniable quality.",
      },
    ],
  },
  {
    category: "5. DELIGHTFUL",
    categoryNumber: 3,
    totalCards: 3,
    themeColor: "#6B4DB8",
    categoryTitle: "Emotional Resonance",
    principleStatement: "Design for joy, not just utility",
    questions: [
      {
        question: "Does this moment spark a positive reaction?",
        answer:
          "If it feels invisible, that's fine. If it feels awkward, forced, or distracting, it needs rethinking.",
      },
      {
        question: "Is the delight tied to the brand?",
        answer:
          "Playful details should feel uniquely ours, aligned with our tone and style, not random or generic.",
      },
      {
        question: "Would someone want to share this?",
        answer:
          "When a moment feels effortless and delightful, users naturally talk about it or show it to others.",
      },
      {
        question: "Does it elevate, not distract?",
        answer:
          "Delight should enhance the experience without slowing users down or creating noise.",
      },
      {
        question: "Would this hold up after 100 uses?",
        answer:
          "Good design feels timeless, staying fresh and rewarding even after repeated interactions.",
      },
    ],
  },
];

export default function PrinciplesPage() {
  const [view, setView] = useState<"grid" | "line">("grid");
  const [targetView, setTargetView] = useState<"grid" | "line">("grid");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const activeCardIndexRef = useRef(0);
  const lineContainerRef = useRef<HTMLDivElement>(null);

  const handleViewChange = (newView: "grid" | "line") => {
    if (newView === view) return;

    setTargetView(newView);
    if (newView === "line") {
      activeCardIndexRef.current = 0;
      setActiveCardIndex(0);
    }
    // Start animation immediately
    setTimeout(() => {
      setView(newView);
    }, 125); // Match animation duration
  };

  // Combine all cards into a single array
  const allCards = [
    ...cardsData,
    ...preciseCardsData,
    ...efficientCardsData,
    ...durableCardsData,
    ...delightfulCardsData,
  ];

  // Keyboard navigation and vertical-to-horizontal scroll for line view
  useEffect(() => {
    if (view !== "line") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lineContainerRef.current) return;

      const container = lineContainerRef.current;
      const scrollAmount = 528 + 16; // card width + gap

      const currentIndex = activeCardIndexRef.current;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newIndex =
          currentIndex === 0 ? allCards.length - 1 : currentIndex - 1;
        activeCardIndexRef.current = newIndex;
        setActiveCardIndex(newIndex);
        // Scroll to the new card position
        if (newIndex === allCards.length - 1) {
          // Scroll to the last card (which is repeated at the end)
          const lastCardPosition =
            (allCards.length - 1) * scrollAmount + scrollAmount;
          container.scrollTo({ left: lastCardPosition, behavior: "smooth" });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const newIndex =
          currentIndex === allCards.length - 1 ? 0 : currentIndex + 1;
        activeCardIndexRef.current = newIndex;
        setActiveCardIndex(newIndex);
        // Scroll to the new card position
        if (newIndex === 0) {
          // Scroll back to the beginning
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    };

    const handleScroll = () => {
      if (!lineContainerRef.current) return;
      const container = lineContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = 528;
      const gap = 16;
      const cardWithGap = cardWidth + gap;
      // Account for the half-visible last card at the start (-264px)
      const adjustedScroll = scrollLeft + 264;
      const newIndex = Math.max(
        0,
        Math.min(allCards.length - 1, Math.round(adjustedScroll / cardWithGap))
      );
      activeCardIndexRef.current = newIndex;
      setActiveCardIndex(newIndex);
    };

    window.addEventListener("keydown", handleKeyDown);
    const container = lineContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [view, allCards.length]);

  // Prevent double scrollbars during transition
  useEffect(() => {
    if (view !== targetView) {
      // During transition, hide all overflow
      document.body.style.overflow = "hidden";
    } else {
      // After transition, set appropriate overflow
      document.body.style.overflow = view === "line" ? "hidden" : "auto";
      document.body.style.overflowY = view === "line" ? "hidden" : "auto";
      document.body.style.overflowX = "hidden"; // Always hide horizontal scrollbar on body
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "auto";
    };
  }, [view, targetView]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#E7E5E3",
        padding: "24px",
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: "8px 8px",
      }}
    >
      <div
        className={`mx-auto p-12 ${
          view === "line" || targetView === "line" ? "w-full" : "max-w-full"
        }`}
        style={{
          position: "relative",
          overflow: "visible",
          zIndex: 20,
          backgroundColor: "#E7E5E3",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          minHeight:
            view === "line" || targetView === "line" ? "100vh" : "auto",
        }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="cursor-pointer">
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
            <span className="text-gray-400">/</span>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
              Software Design Principles
            </h1>
          </div>

          {/* Tabs */}
          <div
            className="flex p-1 rounded-lg"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
            }}
          >
            <button
              onClick={() => handleViewChange("grid")}
              className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 ease-in-out ${
                view === "grid"
                  ? "bg-white text-black/45"
                  : "bg-transparent text-black/45"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => handleViewChange("line")}
              className={`px-3 py-1 rounded text-xs font-medium transition-all duration-200 ease-in-out ${
                view === "line"
                  ? "bg-white text-black/45"
                  : "bg-transparent text-black/45"
              }`}
            >
              Line
            </button>
          </div>
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

        {/* Info Section - Always visible */}
        <div
          className="mb-16"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            justifyItems: "start",
            position: "relative",
            zIndex: 30,
            transform: "none",
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto",
            isolation: "isolate",
          }}
        >
          <div style={{ maxWidth: "528px" }}>
            <h2 className="font-semibold mb-1 text-sm text-gray-900">
              What&apos;s this?
            </h2>
            <p className="text-sm text-gray-900 leading-normal">
              This is a compilation of the aspects we evaluate when shipping a
              solution. think about them as the cliff notes of the
              considerations we should have when making software.
            </p>
          </div>
          <div style={{ maxWidth: "528px" }}>
            <h2 className="font-semibold mb-1 text-sm text-gray-900">
              How to use it?
            </h2>
            <p className="text-sm text-gray-900 leading-normal">
              Whenever your solution is functional, evaluate how it
              progressively fits the prompts. Ideally, it should move upwards
              across iterations, not from the first launch.
            </p>
          </div>
        </div>

        {/* Grid View */}
        {(view === "grid" || targetView === "grid") && (
          <div
            className="principles-grid"
            style={{
              opacity:
                targetView === "line" ||
                (view === "line" && targetView === "grid")
                  ? 0
                  : 1,
              transition: "opacity 125ms ease-out",
            }}
          >
            {allCards.map((card, index) => (
              <PrincipleCard key={index} {...card} />
            ))}
          </div>
        )}

        {/* Line View */}
        {(view === "line" || targetView === "line") && (
          <div
            ref={lineContainerRef}
            className="principles-line"
            style={{
              width: "calc(100% + 96px)",
              marginLeft: "-48px",
              marginRight: "-48px",
              paddingLeft: "32px",
              paddingRight: "32px",
              paddingBottom: "1rem",
              backgroundColor: "transparent",
              alignItems: "flex-start",
              paddingTop: "32px",
              overflowX: "hidden",
              overflowY: "hidden",
              opacity: view === "line" && targetView === "line" ? 1 : 0,
              transition: "opacity 125ms ease-out",
              minHeight: "calc(100vh - 300px)",
            }}
          >
            {/* Repeat content: show last card first with negative margin */}
            <div
              key={`last-${allCards.length - 1}`}
              style={{
                flexShrink: 0,
                width: "528px",
                marginLeft: "-396px", // Negative margin to show only 1/4 (hide 3/4)
                opacity:
                  activeCardIndex === allCards.length - 1
                    ? 1
                    : activeCardIndex === allCards.length - 2
                    ? 0.5
                    : 0.25,
                transition: "opacity 0.2s ease-out",
              }}
            >
              <PrincipleCard {...allCards[allCards.length - 1]} />
            </div>
            {/* Original cards */}
            {allCards.map((card, index) => {
              const isActive = activeCardIndex === index;
              const isNext = activeCardIndex === index - 1; // Previous card is next (to the right)
              const opacity = isActive ? 1 : isNext ? 0.5 : 0.25;
              return (
                <div
                  key={index}
                  style={{
                    flexShrink: 0,
                    width: "528px",
                    opacity,
                    transition: "opacity 0.2s ease-out",
                  }}
                >
                  <PrincipleCard {...card} />
                </div>
              );
            })}
            {/* Repeat cards for seamless loop */}
            {allCards.map((card, index) => {
              const isActive = activeCardIndex === index;
              const isNext = activeCardIndex === index - 1; // Previous card is next (to the right)
              const opacity = isActive ? 1 : isNext ? 0.5 : 0.25;
              return (
                <div
                  key={`repeat-${index}`}
                  style={{
                    flexShrink: 0,
                    width: "528px",
                    opacity,
                    transition: "opacity 0.2s ease-out",
                  }}
                >
                  <PrincipleCard {...card} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
