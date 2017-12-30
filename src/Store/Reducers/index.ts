import { combineReducers } from 'redux';
import enthusiasm, { EnthusiasmState } from './enthusiasm';

export type rootState = {
  enthusiasm: EnthusiasmState;
};

export const rootReducer = combineReducers<EnthusiasmState>({
  enthusiasm,
});
