import { incrementEnthusiasm, decrementEnthusiasm } from './enthusiasm';
import { TypeKeys } from '../TypeKeys';

// basic test layout for jest testing enviroment, unit testing is pretty clean with
// redux because all redux functions are pure.
// https://en.wikipedia.org/wiki/Pure_function

describe('Enthusiasm Reducer', () => {

  it('INCREMENT_ENTHUSIASM action should increment enthusiasmLevel by 1', () => {

    const state = {
      enthusiasmLevel: 2,
      languageName: 'TypeScript',
    };

    expect(incrementEnthusiasm(state, {type: TypeKeys.INCREMENT_ENTHUSIASM}))
      .toEqual({
      enthusiasmLevel: 3,
      languageName: 'TypeScript',
    });
  });

  describe('DECREMENT_ENTHUSIASM action', () => {
    it('should NOT decrement enthusiasmLevel', () => {

      const state = {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
      };

      expect(decrementEnthusiasm(state, {type: TypeKeys.DECREMENT_ENTHUSIASM}))
        .toEqual({
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
      });

    });
    it('should increment enthusiasmLevel by 1', () => {

      const state = {
        enthusiasmLevel: 2,
        languageName: 'TypeScript',
      };

      expect(decrementEnthusiasm(state, {type: TypeKeys.DECREMENT_ENTHUSIASM}))
        .toEqual({
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
      });

    });
  });
});
