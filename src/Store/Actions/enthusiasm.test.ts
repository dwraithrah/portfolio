import * as actions from './';
import { TypeKeys } from '../TypeKeys';

describe('Enthusiasm Actions', () => {

  it('should return INCREMENT_ACTION', () => {
    const expectedAction = {
      type: TypeKeys.INCREMENT_ENTHUSIASM,
    };
    expect(actions.incrementEnthusiasm()).toEqual(expectedAction);
  });

  it('should return DECREMENT_ACTION', () => {
    const expectedAction = {
      type: TypeKeys.DECREMENT_ENTHUSIASM,
    };
    expect(actions.decrementEnthusiasm()).toEqual(expectedAction);
  });

});
