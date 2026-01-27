export default function OnConsideration() {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-8"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
    >
      <div className="w-full max-w-[280px]">
        {/* Mini article preview */}
        <div className="space-y-3">
          {/* Title */}
          <div
            className="h-3 rounded"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              width: "70%",
            }}
          />
          {/* Paragraph lines */}
          <div className="space-y-1.5 pt-2">
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "100%" }}
            />
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "95%" }}
            />
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "88%" }}
            />
          </div>
          {/* Section header */}
          <div
            className="h-2 rounded mt-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              width: "55%",
            }}
          />
          {/* More paragraph lines */}
          <div className="space-y-1.5 pt-1">
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "100%" }}
            />
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "92%" }}
            />
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "78%" }}
            />
          </div>
          {/* Another section */}
          <div
            className="h-2 rounded mt-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              width: "45%",
            }}
          />
          <div className="space-y-1.5 pt-1">
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "100%" }}
            />
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)", width: "85%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
