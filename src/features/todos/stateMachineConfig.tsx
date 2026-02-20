import type {
  StateMachineConfigInterface,
  StepNames,
  WizardState,
} from '../../utils/types/stateMachineTypes';

export const stateMachineConfig: StateMachineConfigInterface<
  WizardState,
  StepNames
> = {
  initialStep: 'step1',
  steps: {
    step1: {
      canAdvance: (state) => !!state.name,
    },
    step2: {
      canAdvance: (state) => !!state.age,
    },
    confirmation: {
      canAdvance: () => true,
    },
  },
  views: {
    step1: ({ state, setState }) => (
      <div>
        <input
          type='text'
          value={state.name}
          onChange={(e) =>
            setState((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder='Full name'
        />
      </div>
    ),
    step2: ({ state, setState }) => (
      <div>
        <input
          type='number'
          value={state.age}
          onChange={(e) =>
            setState((prev) => ({ ...prev, age: parseInt(e.target.value) }))
          }
          placeholder='Full name'
        />
      </div>
    ),
    confirmation: ({ state }) => (
      <div>
        <p>
          {state.name} is {state.age} years old.
        </p>
      </div>
    ),
  },
};
