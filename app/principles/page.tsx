import PrincipleCard from "./PrincipleCard";

// Card data array - can be expanded to 30+ cards
const cardsData = [
  {
    category: "1. CLEAR",
    categoryNumber: 1,
    totalCards: 4,
    themeColor: "#F46036",
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
    themeColor: "#F46036",
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
    themeColor: "#F46036",
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
    themeColor: "#F46036",
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
    themeColor: "#EBA810",
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
    themeColor: "#EBA810",
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
    themeColor: "#EBA810",
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
    themeColor: "#3BCEAC",
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
    themeColor: "#3BCEAC",
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
    themeColor: "#3BCEAC",
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
    themeColor: "#368DD9",
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
    themeColor: "#368DD9",
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
    themeColor: "#368DD9",
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
    themeColor: "#391DC9",
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
    themeColor: "#391DC9",
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
    themeColor: "#391DC9",
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
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto" style={{ width: "fit-content" }}>
        <h1 className="text-4xl font-medium text-gray-900 mb-16 tracking-tight">
          Design Principles
        </h1>

        {/* CLEAR Category Section */}
        <section className="mb-16">
          <h2
            className="text-xl font-semibold"
            style={{ color: "#F46036", marginBottom: "24px" }}
          >
            Clear
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(2, auto)",
              gap: "16px",
              marginTop: 0,
            }}
          >
            {cardsData.map((card, index) => (
              <PrincipleCard key={index} {...card} />
            ))}
          </div>
        </section>

        {/* PRECISE Category Section */}
        <section className="mb-16">
          <h2
            className="text-xl font-semibold mt-12"
            style={{ color: "#EBA810", marginBottom: "24px" }}
          >
            Precise
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(2, auto)",
              gap: "16px",
              marginTop: 0,
            }}
          >
            {preciseCardsData.map((card, index) => (
              <PrincipleCard key={`precise-${index}`} {...card} />
            ))}
          </div>
        </section>

        {/* EFFICIENT Category Section */}
        <section className="mb-16">
          <h2
            className="text-xl font-semibold mt-12"
            style={{ color: "#3BCEAC", marginBottom: "24px" }}
          >
            Efficient
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(2, auto)",
              gap: "16px",
              marginTop: 0,
            }}
          >
            {efficientCardsData.map((card, index) => (
              <PrincipleCard key={`efficient-${index}`} {...card} />
            ))}
          </div>
        </section>

        {/* DURABLE Category Section */}
        <section className="mb-16">
          <h2
            className="text-xl font-semibold mt-12"
            style={{ color: "#368DD9", marginBottom: "24px" }}
          >
            Durable
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(2, auto)",
              gap: "16px",
              marginTop: 0,
            }}
          >
            {durableCardsData.map((card, index) => (
              <PrincipleCard key={`durable-${index}`} {...card} />
            ))}
          </div>
        </section>

        {/* DELIGHTFUL Category Section */}
        <section>
          <h2
            className="text-xl font-semibold mt-12"
            style={{ color: "#391DC9", marginBottom: "24px" }}
          >
            Delightful
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(2, auto)",
              gap: "16px",
              marginTop: 0,
            }}
          >
            {delightfulCardsData.map((card, index) => (
              <PrincipleCard key={`delightful-${index}`} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
