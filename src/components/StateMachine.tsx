import React, { useState } from 'react';
import { stateMachineConfig } from '../features/todos/stateMachineConfig';
import type {
  StateMachineConfigInterface,
  StepNames,
  WizardState,
} from '../utils/types/stateMachineTypes';

const getStepView = <T, V extends string>(
  config: StateMachineConfigInterface<T, V>,
  stepName: V,
): React.ComponentType<{
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
}> => config.views[stepName];

export const StateMachine = () => {
  const [wizardState, setWizardState] = useState<WizardState>({
    name: '',
    age: 0,
  });
  const [currentStep, setCurrentStep] = useState<StepNames>(
    stateMachineConfig.initialStep,
  );

  const StepCompnent = getStepView(stateMachineConfig, currentStep);

  const handleNextStep = () => {
    const canAdvance =
      stateMachineConfig.steps[currentStep].canAdvance(wizardState);

    if (canAdvance) {
      if (currentStep === 'step1') setCurrentStep('step2');
      else if (currentStep === 'step2') setCurrentStep('confirmation');
    } else {
      alert(`You can't move forward yet`);
    }
  };

  return (
    <section>
      <h1> State Machine Wizard</h1>
      <StepCompnent state={wizardState} setState={setWizardState} />
      {currentStep !== 'confirmation' && (
        <button onClick={handleNextStep}> Next </button>
      )}
    </section>
  );
};
