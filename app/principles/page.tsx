"use client";

import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  const [view, setView] = useState<"grid" | "line">("line");
  const [targetView, setTargetView] = useState<"grid" | "line">("line");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // For hiding keystrokes (< 480px)
  const [isStacked, setIsStacked] = useState(false); // For stacking layout (< 640px)
  const [mobileScale, setMobileScale] = useState(1); // Proportional scale for mobile cards
  const [gridScale, setGridScale] = useState(1); // Proportional scale for grid cards
  const [gridColumns, setGridColumns] = useState(2); // Number of columns in grid
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );
  const [pressedButton, setPressedButton] = useState<
    "left" | "right" | "random" | null
  >(null);
  const [pressedTab, setPressedTab] = useState<"grid" | "explore" | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isWrapping, setIsWrapping] = useState(false);
  const activeCardIndexRef = useRef(0);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const handleViewChange = useCallback(
    (newView: "grid" | "line") => {
      if (newView === view) return;

      setTargetView(newView);
      if (newView === "line") {
        activeCardIndexRef.current = 0;
        setActiveCardIndex(0);
      }
      // Start animation immediately
      setTimeout(() => {
        setView(newView);
      }, 300); // Match animation duration
    },
    [view]
  );

  // Combine all cards into a single array
  const allCards = [
    ...cardsData,
    ...preciseCardsData,
    ...efficientCardsData,
    ...durableCardsData,
    ...delightfulCardsData,
  ];

  // Keyboard navigation for view switching and line view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // View switching shortcuts (work in both views)
      if (e.key === "a" || e.key === "A") {
        e.preventDefault();
        if (view !== "grid") {
          setPressedTab("grid");
          handleViewChange("grid");
          setTimeout(() => setPressedTab(null), 150);
        }
        return;
      } else if (e.key === "e" || e.key === "E") {
        e.preventDefault();
        if (view !== "line") {
          setPressedTab("explore");
          handleViewChange("line");
          setTimeout(() => setPressedTab(null), 150);
        }
        return;
      }

      // Line view navigation shortcuts
      if (view !== "line" || !lineContainerRef.current) return;

      const currentIndex = activeCardIndexRef.current;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPressedButton("left");
        const isWrappingBack = currentIndex === 0;

        if (isWrappingBack) {
          // Seamless wrap: animate to duplicate at -1, then snap to real last card
          setSlideDirection("right");
          activeCardIndexRef.current = -1;
          setActiveCardIndex(-1); // Animate to duplicate last card
          // After animation, snap to real last card position
          setTimeout(() => {
            setIsWrapping(true); // Disable transition for snap
            activeCardIndexRef.current = allCards.length - 1;
            setActiveCardIndex(allCards.length - 1);
            requestAnimationFrame(() => {
              setIsWrapping(false);
            });
          }, 150); // Match transition duration
        } else {
          setSlideDirection("right");
          activeCardIndexRef.current = currentIndex - 1;
          setActiveCardIndex(currentIndex - 1);
        }

        setTimeout(() => {
          setSlideDirection(null);
          setPressedButton(null);
        }, 150);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPressedButton("right");
        const isWrappingForward = currentIndex === allCards.length - 1;

        if (isWrappingForward) {
          // Seamless wrap: animate to duplicate at allCards.length, then snap to real first card
          setSlideDirection("left");
          activeCardIndexRef.current = allCards.length;
          setActiveCardIndex(allCards.length); // Animate to duplicate first card
          // After animation, snap to real first card position
          setTimeout(() => {
            setIsWrapping(true); // Disable transition for snap
            activeCardIndexRef.current = 0;
            setActiveCardIndex(0);
            requestAnimationFrame(() => {
              setIsWrapping(false);
            });
          }, 150); // Match transition duration
        } else {
          setSlideDirection("left");
          activeCardIndexRef.current = currentIndex + 1;
          setActiveCardIndex(currentIndex + 1);
        }

        setTimeout(() => {
          setSlideDirection(null);
          setPressedButton(null);
        }, 150);
      } else if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        setPressedButton("random");
        const randomIndex = Math.floor(Math.random() * allCards.length);
        // Determine slide direction based on whether random is before or after current
        const direction = randomIndex > currentIndex ? "left" : "right";
        setSlideDirection(direction);
        activeCardIndexRef.current = randomIndex;
        setActiveCardIndex(randomIndex);
        setTimeout(() => {
          setSlideDirection(null);
          setPressedButton(null);
        }, 150);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [view, allCards.length, handleViewChange]);

  // Drag handlers for card line
  const dragStartXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const dragOffsetRef = useRef(0);
  const startIndexRef = useRef(0);

  useEffect(() => {
    if (view !== "line" || !cardsWrapperRef.current) return;

    const getClientX = (e: MouseEvent | TouchEvent): number => {
      if ("touches" in e) {
        return e.touches[0]?.clientX ?? 0;
      }
      return e.clientX;
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      dragStartXRef.current = getClientX(e);
      startIndexRef.current = activeCardIndexRef.current;
      dragOffsetRef.current = 0;
      setIsDragging(true);
      setDragOffset(0);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const deltaX = getClientX(e) - dragStartXRef.current;
      if (Math.abs(deltaX) > 2) {
        hasDraggedRef.current = true;
      }
      dragOffsetRef.current = deltaX;
      setDragOffset(deltaX);
    };

    const handleEnd = () => {
      if (!isDraggingRef.current) return;
      const wasDragging = hasDraggedRef.current;
      isDraggingRef.current = false;
      setIsDragging(false);

      // Get current drag offset from ref (always fresh)
      const totalDrag = dragOffsetRef.current;

      // Only snap if it was actually a drag, not just a click
      if (wasDragging) {
        // Calculate how many cards to move based on total drag distance
        // On mobile: 80vw + 16px, on desktop: 544px (528px + 16px)
        // Card width is always 544px (528 + 16 gap), but visually scaled on mobile
        const cardWidth = isStacked ? 544 * mobileScale : 544;
        const cardsMoved = Math.round(totalDrag / cardWidth);
        const startIndex = startIndexRef.current;
        let newIndex = startIndex - cardsMoved;

        // Wrap around
        while (newIndex < 0) {
          newIndex += allCards.length;
        }
        while (newIndex >= allCards.length) {
          newIndex -= allCards.length;
        }

        if (newIndex !== startIndex) {
          // Update index
          activeCardIndexRef.current = newIndex;
          setActiveCardIndex(newIndex);
        }

        // Always reset offset smoothly
        dragOffsetRef.current = 0;
        setDragOffset(0);
      } else {
        // No drag, reset offset immediately
        dragOffsetRef.current = 0;
        setDragOffset(0);
      }

      // Reset drag flag after a short delay to allow click handler to check it
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 10);
    };

    const wrapper = cardsWrapperRef.current;

    // Mouse events
    wrapper.addEventListener("mousedown", handleStart);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);

    // Touch events for mobile
    wrapper.addEventListener("touchstart", handleStart, { passive: false });
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);

    return () => {
      wrapper.removeEventListener("mousedown", handleStart);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      wrapper.removeEventListener("touchstart", handleStart);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [view, allCards.length]);

  // Detect mobile (< 480px for keystrokes) and stacked layout (< 640px)
  // Use useLayoutEffect to calculate before paint to avoid flash
  useLayoutEffect(() => {
    const checkBreakpoints = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 480);
      setIsStacked(width < 640);
      // Calculate proportional scale for mobile line view: based on width only
      if (width < 640) {
        const availableWidth = width - 48; // Account for outer container padding
        const targetCardWidth = availableWidth * 0.85; // Leave room for adjacent cards peek
        setMobileScale(Math.min(1, targetCardWidth / 528));
      } else {
        setMobileScale(1);
      }

      // Calculate grid scale: always try to show one more column than fits at 100%
      // Available width = viewport - outer padding (24*2) - inner padding (48*2)
      const containerWidth = width - 48 - 96; // viewport - outer padding - inner padding
      const gap = 16;
      const baseCardWidth = 528;

      // How many columns fit at 100%?
      const columnsAtFullSize = Math.floor(
        (containerWidth + gap) / (baseCardWidth + gap)
      );

      // Try to show one more column, scaled down
      const targetColumns = Math.max(2, columnsAtFullSize + 1);

      // Calculate scale needed for targetColumns
      // totalWidth = targetColumns * cardWidth * scale + (targetColumns - 1) * gap = containerWidth
      const scaleNeeded =
        (containerWidth - (targetColumns - 1) * gap) /
        (targetColumns * baseCardWidth);

      // If scale would be >= 1, just use the columnsAtFullSize at 100%
      const newGridScale = Math.min(1, scaleNeeded);
      const newGridColumns =
        scaleNeeded >= 1 ? columnsAtFullSize : targetColumns;

      setGridScale(newGridScale);
      setGridColumns(newGridColumns);
    };
    checkBreakpoints();
    window.addEventListener("resize", checkBreakpoints);
    return () => window.removeEventListener("resize", checkBreakpoints);
  }, []);

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
        className={`mx-auto p-12 ${
          view === "line" || targetView === "line" ? "w-full" : "max-w-full"
        }`}
        style={{
          position: "relative",
          overflow: "hidden",
          zIndex: 20,
          backgroundColor: "#E7E5E3",
          borderRadius: "8px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.12)",
          minHeight:
            view === "line" || targetView === "line" ? "100vh" : "auto",
        }}
      >
        <div
          className="flex mb-8"
          style={{
            position: "relative",
            zIndex: 40,
            flexDirection: isStacked ? "column" : "row",
            alignItems: isStacked ? "stretch" : "center",
            justifyContent: isStacked ? "flex-start" : "space-between",
            gap: isStacked ? "32px" : "16px",
          }}
        >
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
            className="flex p-1 rounded-lg relative"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              width: isStacked ? "100%" : "fit-content",
            }}
          >
            {/* Sliding indicator */}
            <div
              style={{
                position: "absolute",
                top: "4px",
                bottom: "4px",
                left: view === "line" ? "4px" : "50%",
                right: view === "line" ? "50%" : "4px",
                backgroundColor: "white",
                borderRadius: "4px",
                transition:
                  "left 0.15s cubic-bezier(0.34, 1.25, 0.64, 1), right 0.15s cubic-bezier(0.34, 1.25, 0.64, 1)",
                zIndex: 0,
              }}
            />
            <button
              onClick={() => {
                if (view !== "line") handleViewChange("line");
              }}
              disabled={view === "line"}
              className="px-3 py-1 rounded text-xs font-medium relative z-10 w-1/2 sm:w-auto flex items-center justify-center sm:inline-flex sm:justify-start"
              style={{
                transform:
                  pressedTab === "explore" ? "scale(0.95)" : "scale(1)",
                transition: "transform 0.05s ease-out",
                color: "rgba(0, 0, 0, 0.45)",
                cursor: view === "line" ? "default" : "pointer",
              }}
            >
              Explore
              <span
                className={isMobile ? "hidden" : "inline-flex"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  fontSize: "9px",
                  fontWeight: 600,
                  opacity: 0.5,
                  marginLeft: "6px",
                  verticalAlign: "middle",
                }}
              >
                {" "}
                E
              </span>
            </button>
            <button
              onClick={() => {
                if (view !== "grid") handleViewChange("grid");
              }}
              disabled={view === "grid"}
              className="px-3 py-1 rounded text-xs font-medium relative z-10 flex items-center justify-center"
              style={{
                transform: pressedTab === "grid" ? "scale(0.95)" : "scale(1)",
                transition: "transform 0.05s ease-out",
                color: "rgba(0, 0, 0, 0.45)",
                cursor: view === "grid" ? "default" : "pointer",
                width: isStacked ? "50%" : "auto",
                display: isStacked ? "flex" : "inline-flex",
                justifyContent: isStacked ? "center" : "flex-start",
              }}
            >
              View All
              <span
                className={isMobile ? "hidden" : "inline-flex"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  fontSize: "9px",
                  fontWeight: 600,
                  opacity: 0.5,
                  marginLeft: "6px",
                  verticalAlign: "middle",
                }}
              >
                {" "}
                A
              </span>
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
          className={isStacked ? "mb-4" : "mb-16"}
          style={{
            display: "grid",
            gridTemplateColumns: isStacked ? "1fr" : "repeat(2, 1fr)",
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
          <div
            style={{ maxWidth: isStacked ? "100%" : "528px", width: "100%" }}
          >
            <h2 className="font-semibold mb-1 text-sm text-gray-900">
              What&apos;s this?
            </h2>
            <p className="text-sm text-gray-900 leading-normal">
              This is a compilation of the aspects we evaluate when shipping a
              solution. think about them as the cliff notes of the
              considerations we should have when making software.
            </p>
          </div>
          <div
            style={{ maxWidth: isStacked ? "100%" : "528px", width: "100%" }}
          >
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

        {/* Unified Cards Container - Seamless transitions */}
        <div style={{ position: "relative", width: "100%" }}>
          <motion.div
            ref={lineContainerRef}
            style={{
              width:
                targetView === "line"
                  ? isStacked
                    ? "100vw"
                    : "calc(100% + 48px)"
                  : "100%",
              marginLeft:
                targetView === "line"
                  ? isStacked
                    ? "calc(-50vw + 50%)"
                    : "-24px"
                  : "0",
              marginRight:
                targetView === "line"
                  ? isStacked
                    ? "calc(-50vw + 50%)"
                    : "-24px"
                  : "0",
              paddingLeft: "0",
              paddingRight: "0",
              paddingBottom: "0",
              backgroundColor: "transparent",
              display: targetView === "line" ? "flex" : "grid",
              gridTemplateColumns:
                targetView === "grid"
                  ? `repeat(${gridColumns}, ${Math.round(528 * gridScale)}px)`
                  : "none",
              gap: "16px",
              alignItems: targetView === "line" ? "center" : "start",
              justifyContent: "center",
              paddingTop: "0",
              overflowX: targetView === "line" ? "hidden" : "visible",
              overflowY: "visible",
              position: "relative",
              minHeight:
                targetView === "line"
                  ? `${740 * (isStacked ? mobileScale : 1) * 1.08}px`
                  : "auto",
              height: "auto",
              opacity: 1,
              transform:
                view === "line" && targetView === "line"
                  ? "translateX(0)"
                  : targetView === "line" && view === "grid"
                  ? "translateX(-48px)"
                  : view === "line" && targetView === "grid"
                  ? "translateX(-48px)"
                  : targetView === "line"
                  ? "translateX(48px)"
                  : view === "line" && targetView === "grid"
                  ? "translateX(48px)"
                  : "translateX(0)",
              transition:
                "opacity 0.3s cubic-bezier(0.34, 1.25, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.25, 0.64, 1)",
              pointerEvents:
                view === "line" && targetView === "line"
                  ? "auto"
                  : view === "grid" && targetView === "grid"
                  ? "auto"
                  : "none",
            }}
          >
            {/* Fade masks for line view - hidden on mobile */}
            {targetView === "line" && !isStacked && (
              <>
                <div
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to right, #E7E5E3 0%, #E7E5E3 40%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "-24px",
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to left, #E7E5E3 0%, #E7E5E3 40%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />
              </>
            )}

            {/* Cards wrapper for line view positioning */}
            {targetView === "line" ? (
              <motion.div
                ref={cardsWrapperRef}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  position: "absolute",
                  left: "50vw",
                  marginLeft: isStacked ? "0" : "-48px", // Compensate for container offsets
                  transform: `translateX(calc(${
                    // Center the active card at viewport center
                    // Card width is always 528px, gap is 16px
                    // On mobile, we need to account for the scale in the translation
                    // Active card center = (index + 3) * (cardWidth + gap) + margin + halfScaledWidth
                    isStacked
                      ? `-${
                          ((activeCardIndex + 3) * 544 + 21 + 272) * mobileScale
                        }px`
                      : `-${(activeCardIndex + 3) * 544 + 21 + 285}px`
                  } + ${dragOffset}px)) ${
                    isStacked ? `scale(${mobileScale})` : ""
                  }`,
                  transformOrigin: "left center",
                  transition:
                    isDragging || isWrapping
                      ? "none"
                      : "transform 0.15s ease-out",
                  cursor: isDragging ? "grabbing" : "grab",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  touchAction: "pan-x",
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
                layout={false}
              >
                {/* Duplicate last 3 cards at start for seamless looping */}
                {allCards.length > 0 &&
                  [2, 1, 0].map((offset) => {
                    const cardIndex =
                      (allCards.length - 1 - offset + allCards.length) %
                      allCards.length;
                    const virtualIndex = -1 - offset; // -3, -2, -1
                    const isActive = activeCardIndex === virtualIndex;
                    const isPrev = activeCardIndex === virtualIndex + 1;
                    const isNext = activeCardIndex === virtualIndex - 1;
                    const opacity = isActive
                      ? 1
                      : isPrev || isNext
                      ? 0.5
                      : 0.25;
                    const scale = isActive ? (isStacked ? 1.03 : 1.08) : 1;
                    const marginLeft = isActive ? "21px" : "0px";
                    const marginRight = isActive ? "21px" : "0px";

                    return (
                      <motion.div
                        key={`duplicate-start-${offset}`}
                        style={{
                          flexShrink: 0,
                          width: "528px",
                          maxWidth: "528px",
                          marginLeft,
                          marginRight,
                          transformOrigin: "center center",
                        }}
                        animate={{
                          opacity,
                          scale,
                        }}
                        transition={
                          isWrapping
                            ? { duration: 0 }
                            : {
                                opacity: { duration: 0.3, ease: "easeOut" },
                                scale: { duration: 0.3, ease: "easeOut" },
                                marginLeft: { duration: 0.3, ease: "easeOut" },
                                marginRight: { duration: 0.3, ease: "easeOut" },
                              }
                        }
                      >
                        <PrincipleCard {...allCards[cardIndex]} />
                      </motion.div>
                    );
                  })}

                {allCards.map((card, index) => {
                  // Map virtual indices to real indices for opacity/scale
                  const realActiveIndex =
                    activeCardIndex < 0
                      ? allCards.length - 1 // Virtual -1 maps to last card
                      : activeCardIndex >= allCards.length
                      ? 0 // Virtual allCards.length maps to first card
                      : activeCardIndex;

                  const isActive = realActiveIndex === index;
                  const isPrev =
                    realActiveIndex === 0
                      ? index === allCards.length - 1
                      : index === realActiveIndex - 1;
                  const isNext =
                    realActiveIndex === allCards.length - 1
                      ? index === 0
                      : index === realActiveIndex + 1;
                  const opacity = isActive ? 1 : isPrev || isNext ? 0.5 : 0.25;
                  const scale = isActive ? (isStacked ? 1.03 : 1.08) : 1;

                  return (
                    <motion.div
                      key={`${index}-${isActive}`}
                      data-card
                      animate={{
                        opacity,
                        scale,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Don't trigger card click if it was a drag
                        if (hasDraggedRef.current) return;
                        if (!lineContainerRef.current) return;
                        const direction =
                          index > activeCardIndex
                            ? "left"
                            : index < activeCardIndex
                            ? "right"
                            : null;
                        if (direction) {
                          setSlideDirection(direction);
                        }
                        activeCardIndexRef.current = index;
                        setActiveCardIndex(index);
                        setTimeout(() => setSlideDirection(null), 300);
                      }}
                      style={{
                        flexShrink: 0,
                        width: "528px",
                        maxWidth: "528px",
                        cursor: isDragging ? "grabbing" : "grab",
                        marginLeft: isActive ? "21px" : "0px",
                        marginRight: isActive ? "21px" : "0px",
                        marginTop: 0,
                        marginBottom: 0,
                        padding: 0,
                        transformOrigin: "center center",
                      }}
                      transition={
                        isWrapping
                          ? { duration: 0 }
                          : {
                              opacity: { duration: 0.3, ease: "easeOut" },
                              scale: { duration: 0.3, ease: "easeOut" },
                              marginLeft: { duration: 0.3, ease: "easeOut" },
                              marginRight: { duration: 0.3, ease: "easeOut" },
                            }
                      }
                    >
                      <PrincipleCard {...card} />
                    </motion.div>
                  );
                })}

                {/* Duplicate first 3 cards at end for seamless looping */}
                {allCards.length > 0 &&
                  [0, 1, 2].map((offset) => {
                    const cardIndex = offset % allCards.length;
                    const virtualIndex = allCards.length + offset; // allCards.length, allCards.length + 1, allCards.length + 2
                    const isActive = activeCardIndex === virtualIndex;
                    const isPrev = activeCardIndex === virtualIndex - 1;
                    const isNext = activeCardIndex === virtualIndex + 1;
                    const opacity = isActive
                      ? 1
                      : isPrev || isNext
                      ? 0.5
                      : 0.25;
                    const scale = isActive ? (isStacked ? 1.03 : 1.08) : 1;
                    const marginLeft = isActive ? "21px" : "0px";
                    const marginRight = isActive ? "21px" : "0px";

                    return (
                      <motion.div
                        key={`duplicate-end-${offset}`}
                        style={{
                          flexShrink: 0,
                          width: "528px",
                          maxWidth: "528px",
                          marginLeft,
                          marginRight,
                          transformOrigin: "center center",
                        }}
                        animate={{
                          opacity,
                          scale,
                        }}
                        transition={
                          isWrapping
                            ? { duration: 0 }
                            : {
                                opacity: { duration: 0.3, ease: "easeOut" },
                                scale: { duration: 0.3, ease: "easeOut" },
                                marginLeft: { duration: 0.3, ease: "easeOut" },
                                marginRight: { duration: 0.3, ease: "easeOut" },
                              }
                        }
                      >
                        <PrincipleCard {...allCards[cardIndex]} />
                      </motion.div>
                    );
                  })}
              </motion.div>
            ) : (
              // Grid view - cards fill column width and scale proportionally
              allCards.map((card, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    maxWidth: "528px",
                  }}
                >
                  <div
                    style={{
                      width: "528px",
                      zoom: gridScale < 1 ? gridScale : 1,
                    }}
                  >
                    <PrincipleCard {...card} />
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </div>

        {/* Navigation buttons - Fixed at bottom */}
        {(view === "line" || targetView === "line") && (
          <div
            style={{
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: `translateX(-50%) ${
                targetView === "line" && view === "grid"
                  ? "translateX(-48px)"
                  : view === "line" && targetView === "grid"
                  ? "translateX(-48px)"
                  : "translateX(0)"
              }`,
              display: "flex",
              gap: "4px",
              zIndex: 50,
              opacity:
                targetView === "line" && view === "grid"
                  ? 0
                  : view === "line" && targetView === "line"
                  ? 1
                  : view === "line" && targetView === "grid"
                  ? 1
                  : 0,
              transition:
                "opacity 0.3s cubic-bezier(0.34, 1.25, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.25, 0.64, 1)",
              pointerEvents:
                view === "line" && targetView === "line" ? "auto" : "none",
            }}
          >
            <button
              onClick={() => {
                const currentIndex = activeCardIndexRef.current;
                const isWrappingBack = currentIndex === 0;

                if (isWrappingBack) {
                  // Seamless wrap: animate to duplicate at -1, then snap to real last card
                  setSlideDirection("right");
                  activeCardIndexRef.current = -1;
                  setActiveCardIndex(-1);
                  setTimeout(() => {
                    setIsWrapping(true);
                    activeCardIndexRef.current = allCards.length - 1;
                    setActiveCardIndex(allCards.length - 1);
                    requestAnimationFrame(() => {
                      setIsWrapping(false);
                    });
                  }, 150);
                } else {
                  setSlideDirection("right");
                  activeCardIndexRef.current = currentIndex - 1;
                  setActiveCardIndex(currentIndex - 1);
                }
                setTimeout(() => setSlideDirection(null), 300);
              }}
              style={{
                backgroundColor:
                  pressedButton === "left"
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.6)",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform:
                  pressedButton === "left" ? "scale(0.95)" : "scale(1)",
                transition:
                  "background-color 0.05s ease-out, transform 0.05s ease-out",
              }}
            >
              ←
            </button>
            <button
              onClick={() => {
                const randomIndex = Math.floor(Math.random() * allCards.length);
                activeCardIndexRef.current = randomIndex;
                setActiveCardIndex(randomIndex);
              }}
              style={{
                backgroundColor:
                  pressedButton === "random"
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.6)",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                cursor: "pointer",
                transform:
                  pressedButton === "random" ? "scale(0.95)" : "scale(1)",
                transition:
                  "background-color 0.05s ease-out, transform 0.05s ease-out",
              }}
            >
              Random
              <span
                className={isMobile ? "hidden" : "inline-flex"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  fontSize: "9px",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginLeft: "6px",
                  verticalAlign: "middle",
                }}
              >
                {" "}
                R
              </span>
            </button>
            <button
              onClick={() => {
                const currentIndex = activeCardIndexRef.current;
                const isWrappingForward = currentIndex === allCards.length - 1;

                if (isWrappingForward) {
                  // Seamless wrap: animate to duplicate at allCards.length, then snap to real first card
                  setSlideDirection("left");
                  activeCardIndexRef.current = allCards.length;
                  setActiveCardIndex(allCards.length);
                  setTimeout(() => {
                    setIsWrapping(true);
                    activeCardIndexRef.current = 0;
                    setActiveCardIndex(0);
                    requestAnimationFrame(() => {
                      setIsWrapping(false);
                    });
                  }, 150);
                } else {
                  setSlideDirection("left");
                  activeCardIndexRef.current = currentIndex + 1;
                  setActiveCardIndex(currentIndex + 1);
                }
                setTimeout(() => setSlideDirection(null), 300);
              }}
              style={{
                backgroundColor:
                  pressedButton === "right"
                    ? "rgba(0, 0, 0, 0.8)"
                    : "rgba(0, 0, 0, 0.6)",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform:
                  pressedButton === "right" ? "scale(0.95)" : "scale(1)",
                transition:
                  "background-color 0.05s ease-out, transform 0.05s ease-out",
              }}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
