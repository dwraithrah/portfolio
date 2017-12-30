// action definition for redux, this is a string enumeration, basically functions as just a list of 
// strings, but they are typesafe which is why they are choice here.

export enum TypeKeys {
  INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM',
  DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM',
  OTHER_ACTION = '__any_other_action_type__',
}
