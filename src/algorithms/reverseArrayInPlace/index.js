/*
 * Rules:
 * 1. Manipulate the Array passed in
 * 2. Do not push elements into a new array and return that array
 * 3. Do not use Array.reverse()
 */

const reverseArrayInPlace = array => {
  for (let i = 0; i < array.length / 2; i++) {
    let tempElement = array[i];

    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempElement;
  }

  return array;
};

export default reverseArrayInPlace;
