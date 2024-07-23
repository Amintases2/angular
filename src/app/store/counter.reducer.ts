import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, double } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => state - 1),
  on(double, (state) => state * 2),
  on(reset, (state) => 0)
);
