import { 
  EnthusiasmActionTypes, 
  IncrementEnthusiasm, 
  DecrementEnthusiasm,
} from '../Actions/enthusiasm';

import { TypeKeys } from '../TypeKeys';

import { updateObject } from '../../util/';

export interface EnthusiasmState {
  enthusiasmLevel: number;
  languageName: string;
}

const initialState: EnthusiasmState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

export const incrementEnthusiasm = (state: EnthusiasmState, action: IncrementEnthusiasm)  => 
  updateObject(state, { enthusiasmLevel: state.enthusiasmLevel + 1});

export const decrementEnthusiasm = (state: EnthusiasmState, action: DecrementEnthusiasm) => 
  updateObject(state, { enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) });

const enthusiasm = (state: EnthusiasmState = initialState, action: EnthusiasmActionTypes): EnthusiasmState => {
  switch (action.type) {
    case TypeKeys.INCREMENT_ENTHUSIASM: return incrementEnthusiasm(state, action);
    case TypeKeys.DECREMENT_ENTHUSIASM: return decrementEnthusiasm(state, action);
    default: return state;
  }
};

export default enthusiasm;
