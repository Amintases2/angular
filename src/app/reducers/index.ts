import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from '../store/counter.reducer';

export interface State {
  count: number;
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
};
