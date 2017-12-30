// this is the basic boilerplate for a state reducer in redux, 

import { 
  EnthusiasmActionTypes, 
  IncrementEnthusiasm, 
  DecrementEnthusiasm,
} from '../Actions/enthusiasm';

import { TypeKeys } from '../TypeKeys';

import { updateObject } from '../../util/';

// setting the type definition of the initial data states here

export interface EnthusiasmState {
  enthusiasmLevel: number;
  languageName: string;
}
// the actual initial state
const initialState: EnthusiasmState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

// these functions are alterint the state, notice the function calling inside, updateObject, this is my 
// own creation to make the code prettier, plus the name kind of gives away what it does. oh and 
// its all immutable changes.
export const incrementEnthusiasm = (state: EnthusiasmState, action: IncrementEnthusiasm)  => 
  updateObject(state, { enthusiasmLevel: state.enthusiasmLevel + 1});

export const decrementEnthusiasm = (state: EnthusiasmState, action: DecrementEnthusiasm) => 
  updateObject(state, { enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) });


// this is how we decide which reducer function is going to be called, and it returns the result at the end of the 
// day. 
const enthusiasm = (state: EnthusiasmState = initialState, action: EnthusiasmActionTypes): EnthusiasmState => {
  switch (action.type) {
    case TypeKeys.INCREMENT_ENTHUSIASM: return incrementEnthusiasm(state, action);
    case TypeKeys.DECREMENT_ENTHUSIASM: return decrementEnthusiasm(state, action);
    default: return state;
  }
};

export default enthusiasm;
