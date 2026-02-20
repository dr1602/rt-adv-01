import type React from 'react';

export type StepNames = 'step1' | 'step2' | 'confirmation';

export interface StateMachineConfigInterface<StateType, StepNames extends string> {
  initialStep: StepNames;
  steps: {
    [key in StepNames]: {
      canAdvance: (state: StateType) => boolean;
    };
  };
  views: {
    [key in StepNames]: React.ComponentType<{
      state: StateType;
      setState: React.Dispatch<React.SetStateAction<StateType>>;
    }>;
  };
}

export type WizardState = {
  name: string;
  age: number;
};
