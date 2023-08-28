import { createReducer, on } from '@ngrx/store';
import { addField, initNewDfForm, reset } from './df.actions';

export interface DynamicFormState {
  name: string;

  volume: number;
}

const initialState: DynamicFormState = {
  name: '',
  volume: 0,
};

export const dynamicFormReducer = createReducer(
  initialState,
  on(initNewDfForm, (state, action) => ({
    ...state,
    name: action.name,
  })),
  on(addField, (state, action) => {
    return {
      ...state,
    };
  })
);
