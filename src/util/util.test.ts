import { updateObject, getExclamationMarks } from './';

describe('updateObject function', () => {
  let oldObject = {value: 1};

  it('should update an object immutably', () => {
    expect(updateObject(oldObject, {value: 2})).toEqual({value: 2});
  });
});

describe('getExclamationMarks function', () => {
  let enthusiasmLevel = 5;

  it('should return 5 exclmation marks', () => {
    expect(getExclamationMarks(enthusiasmLevel)).toEqual('!!!!!');
  });
});
