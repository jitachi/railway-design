// Helper to convert hex to rgba
const hexToRgba = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Chevron icon component
const ChevronIcon = ({ color }: { color: string }) => (
  <svg
    className="w-4 h-4"
    style={{ color }}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Question item interface
interface QuestionItem {
  question: string;
  answer: string;
}

// Principle card props interface
interface PrincipleCardProps {
  category: string;
  categoryNumber: number;
  totalCards: number;
  themeColor: string;
  categoryTitle: string;
  principleStatement: string;
  questions: QuestionItem[];
}

export default function PrincipleCard({
  category,
  categoryNumber,
  totalCards,
  themeColor,
  categoryTitle,
  principleStatement,
  questions,
}: PrincipleCardProps) {
  return (
    <div
      className="bg-white rounded-xl border-2 p-2 pt-0 shadow-sm flex flex-col w-full"
      style={{
        borderColor: themeColor,
        backgroundImage: `radial-gradient(circle, ${hexToRgba(
          themeColor,
          0.35
        )} 1px, transparent 1px)`,
        backgroundSize: "6px 6px",
        backgroundPosition: "center 0",
        backgroundColor: "#ffffff",
        minHeight: "641px",
        maxWidth: "528px",
      }}
    >
      {/* Top Header Section with Dotted Pattern */}
      <div className="relative px-4">
        {/* Dotted pattern background */}

        <div className="relative flex justify-between items-center py-3 pb-2.5 px-2 text-xs">
          <div
            className="bg-white rounded-md"
            style={{
              color: themeColor,
              fontFamily: "JetBrains Mono",
              fontWeight: 600,
            }}
          >
            {category}
          </div>
          <div
            className="bg-white rounded-md"
            style={{
              color: themeColor,
              fontFamily: "JetBrains Mono",
              fontWeight: 600,
            }}
          >
            {categoryNumber}/{totalCards}
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded p-6 border-2 flex-1"
        style={{
          borderColor: hexToRgba(themeColor, 0.25),
        }}
      >
        {/* Principle Category */}
        <div>
          <h2
            className="text-2xl font-medium mb-0.5"
            style={{ color: themeColor, letterSpacing: "-0.0125em" }}
          >
            {categoryTitle}
          </h2>
        </div>

        {/* Main Principle Statement */}
        <h3
          className="text-2xl font-medium text-gray-900 mb-6 leading-tight"
          style={{ letterSpacing: "-0.0125em" }}
        >
          {principleStatement}
        </h3>

        {/* List of Explanatory Questions/Points */}
        <div className="space-y-2">
          {questions.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex-shrink-0 py-1">
                <ChevronIcon color={themeColor} />
              </div>
              <div className="flex-1">
                <p
                  className="font-medium text-base text-gray-900"
                  style={{ letterSpacing: "-0.0125em" }}
                >
                  {item.question}
                </p>
                <p
                  className="text-base text-gray-400 leading-relaxed"
                  style={{ letterSpacing: "-0.0125em" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
