
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
