
// basic boilerplate for a redux action, it takes in the actions and gets 
// exported to the reducer, the reducer then reduces the action down and updates
// the store. 

import { TypeKeys } from '../TypeKeys';

export type EnthusiasmActionTypes = 
  | IncrementEnthusiasm 
  | DecrementEnthusiasm;

export interface IncrementEnthusiasm {
  type: TypeKeys.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: TypeKeys.DECREMENT_ENTHUSIASM;
}

export const incrementEnthusiasm  = (): IncrementEnthusiasm  => ({
    type: TypeKeys.INCREMENT_ENTHUSIASM,
});

export const decrementEnthusiasm = (): DecrementEnthusiasm => ({
    type: TypeKeys.DECREMENT_ENTHUSIASM,
});
