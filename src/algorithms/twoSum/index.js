/**
 * Rules:
 * 1. Returns an Array of arrays, containing pairs of numbers.
 * 2. Any number in the array can be used in multiple pairs.
 * @param {[Number]} array
 * @param {Number} sum
 * @returns An array of arrays containing pairs of numbers.
 */
const twoSum = (array, sum) => {
  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    let counterpart = sum - currentElement;

    if (hashTable.indexOf(counterpart) != -1) {
      pairs = [...pairs, [currentElement, counterpart]];
    }

    hashTable = [...hashTable, currentElement];
  }

  return pairs;
};

export default twoSum;
