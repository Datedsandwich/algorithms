const getMean = array => array.reduce((a, b) => a + b, 0) / array.length;

const getMedian = array => {};

const getMode = array => {};

const meanMedianMode = array => {
  return {
    mean: getMean(array)
  };
};

export default meanMedianMode;
