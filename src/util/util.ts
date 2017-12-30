export const updateObject = <T, U>(oldObject: T, updatedValues: U): T => {
  let copy = Object.assign({}, oldObject);
  return  Object.assign(copy, updatedValues);
};

export const getExclamationMarks = (numChars: number): string =>  Array(numChars + 1).join('!');
