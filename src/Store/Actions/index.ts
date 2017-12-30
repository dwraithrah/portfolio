// the root file for your actions, exports all actions from all of your 
// action files if you have more, and also exports the type, type all
// is used in the container files that needs to know the types of 
// dispatches being used.

export {
  incrementEnthusiasm,
  decrementEnthusiasm,
  EnthusiasmActionTypes,
} from './enthusiasm';

import { EnthusiasmActionTypes } from './enthusiasm';

export type all =  
  | EnthusiasmActionTypes;
