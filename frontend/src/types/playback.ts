export type PlaybackStatus = "idle" | "playing" | "paused" | "finished";

export type PlaybackState = {
  currentStep: number;
  totalSteps: number;
  status: PlaybackStatus;
  speed: number; // 1 = normal, 0.5 = slow, 2 = fast
};

export type PlaybackControls = {
  play: () => void;
  pause: () => void;
  reset: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setSpeed: (speed: number) => void;
  goToStep: (index: number) => void;
};
