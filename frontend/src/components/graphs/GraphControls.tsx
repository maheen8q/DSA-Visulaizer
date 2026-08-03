type GraphControlsProps = {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function GraphControls({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
}: GraphControlsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-slate-700 text-white rounded disabled:opacity-30"
        >
          ← Prev
        </button>
        <button
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
          className="px-4 py-2 bg-slate-700 text-white rounded disabled:opacity-30"
        >
          Next →
        </button>
      </div>
      <p className="text-xs text-gray-400">
        Step {currentStep + 1} / {totalSteps}
      </p>
    </div>
  );
}