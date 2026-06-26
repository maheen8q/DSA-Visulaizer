import type { PlaybackState, PlaybackControls } from "../../types/playback";

type Props = {
  state: PlaybackState;
  controls: PlaybackControls;
};

const SPEED_OPTIONS = [0.5, 1, 1.5, 2];

export default function PlaybackControlsPanel({ state, controls }: Props) {
  const { currentStep, totalSteps, status, speed } = state;
  const isFinished = status === "finished";
  const isPlaying = status === "playing";
  const progress = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;

  return (
    <div className="flex flex-col gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900">

      {/* Progress bar */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>{currentStep + 1}</span>
        <div className="flex-1 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>{totalSteps}</span>
      </div>

      {/* Main controls */}
      <div className="flex items-center justify-center gap-2">
        {/* Prev */}
        <button
          onClick={controls.prevStep}
          disabled={currentStep === 0}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition"
          title="Previous step"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Play / Pause */}
        <button
          onClick={isPlaying ? controls.pause : controls.play}
          className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition"
          title={isPlaying ? "Pause" : isFinished ? "Replay" : "Play"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Next */}
        <button
          onClick={controls.nextStep}
          disabled={currentStep >= totalSteps - 1}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition"
          title="Next step"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Reset */}
        <button
          onClick={controls.reset}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition ml-2"
          title="Reset"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Speed selector */}
      <div className="flex items-center justify-center gap-1">
        <span className="text-xs text-gray-400 mr-1">Speed</span>
        {SPEED_OPTIONS.map((s) => (
          <button
            key={s}
            onClick={() => controls.setSpeed(s)}
            className={`px-2.5 py-1 text-xs rounded-lg transition ${
              speed === s
                ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-medium"
                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
            }`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
