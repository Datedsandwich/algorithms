const getMean = array => array.reduce((a, b) => a + b, 0) / array.length;

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

const getMode = array => {};

const meanMedianMode = array => {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
};

export default meanMedianMode;
