/**
 * Returns the mean of the given set of numbers, as a Number.
 * @param {Number} array
 */
const getMean = array => array.reduce((a, b) => a + b, 0) / array.length;

/**
 * Returns the Median of the given set of numbers, as a Number.
 * @param {Number} array
 */
const getMedian = array => {
  const sorted = [...array].sort((a, b) => a - b);

  if (sorted.length % 2 != 0) {
    return sorted[Math.floor(sorted.length / 2)];
  } else {
    const mid1 = sorted[sorted.length / 2 - 1];
    const mid2 = sorted[sorted.length / 2];

    const mid = [mid1, mid2];

    return getMean(mid);
  }
};

/**
 * Returns the Mode of the given set of numbers, as an Array.
 * @param {Number} array
 */
const getMode = array => {
  let modeMap = {};

  array.forEach(number => {
    if (!modeMap[number]) {
      modeMap[number] = 0;
    }

    modeMap[number]++;
  });

  let maxFrequency = 0;
  let modes = [];

  for (const number in modeMap) {
    if (modeMap[number] > maxFrequency) {
      modes = [Number(number)];
      maxFrequency = modeMap[number];
    } else if (modeMap[number] == maxFrequency) {
      modes = [...modes, Number(number)];
    }
  }

  if (modes.length == Object.keys(modeMap).length) {
    modes = [];
  }

  return modes;
};

/**
 * Returns an object containing the mean, median and mode of the given set of numbers.
 *
 * @param {Number} array
 */
const meanMedianMode = array => {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
};

export default meanMedianMode;
