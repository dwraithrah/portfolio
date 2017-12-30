// where are reducers all end up at, notice that I also export a type, this is
// so typescript knows the type that rootState is, as your app grows, if it grows,
// you will have to add more types inside of rootstate, this basically combines
// all of your reducers into one master reducer.

import { combineReducers } from 'redux';
import enthusiasm, { EnthusiasmState } from './enthusiasm';

export type rootState = {
  enthusiasm: EnthusiasmState;
};

export const rootReducer = combineReducers<EnthusiasmState>({
  enthusiasm,
});
