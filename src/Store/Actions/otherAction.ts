import { TypeKeys } from '../TypeKeys';

// the entire point of this file is just in case you use a 
// third party library that returns a state that you are 
// unaware of, you can use this action in its place.

export interface OtherAction {
  type: TypeKeys.OTHER_ACTION;
}
