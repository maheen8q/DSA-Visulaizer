import { useState, useEffect, useRef, useCallback } from "react";
import type { PlaybackState, PlaybackControls, PlaybackStatus } from "../types/playback";
import type { AnyStep } from "../types/steps";

const SPEED_MAP: Record<number, number> = {
  0.5: 1200,
  1:   600,
  1.5: 350,
  2:   150,
};

type UsePlaybackReturn = {
  state: PlaybackState;
  controls: PlaybackControls;
  currentStepData: AnyStep | null;
};

export function usePlayback(steps: AnyStep[]): UsePlaybackReturn {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<PlaybackStatus>("idle");
  const [speed, setSpeedState] = useState(1);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stepsRef = useRef(steps);
  stepsRef.current = steps;

  // Clear interval helper
  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Auto-advance when playing
  useEffect(() => {
    if (status !== "playing") {
      clearTimer();
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        const next = prev + 1;
        if (next >= stepsRef.current.length) {
          clearTimer();
          setStatus("finished");
          return prev;
        }
        return next;
      });
    }, SPEED_MAP[speed] ?? 600);

    return clearTimer;
  }, [status, speed, clearTimer]);

  // Reset when steps array changes (new algorithm / new input)
  useEffect(() => {
    setCurrentStep(0);
    setStatus("idle");
  }, [steps]);

  // ── Controls ──────────────────────────────────────────────────────────────
  const play = useCallback(() => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
    }
    setStatus("playing");
  }, [currentStep, steps.length]);

  const pause = useCallback(() => {
    setStatus("paused");
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setCurrentStep(0);
    setStatus("idle");
  }, [clearTimer]);

  const nextStep = useCallback(() => {
    setStatus("paused");
    setCurrentStep((prev) => Math.min(prev + 1, stepsRef.current.length - 1));
  }, []);

  const prevStep = useCallback(() => {
    setStatus("paused");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const setSpeed = useCallback((s: number) => {
    setSpeedState(s);
  }, []);

  const goToStep = useCallback((index: number) => {
    setStatus("paused");
    setCurrentStep(Math.max(0, Math.min(index, stepsRef.current.length - 1)));
  }, []);

  return {
    state: {
      currentStep,
      totalSteps: steps.length,
      status,
      speed,
    },
    controls: { play, pause, reset, nextStep, prevStep, setSpeed, goToStep },
    currentStepData: steps[currentStep] ?? null,
  };
}
