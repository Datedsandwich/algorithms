import meanMedianMode from "../index";

describe("Mean Median Mode", () => {
  it("should return an object with the mean of the given set of numbers", () => {
    const numbers = [10, 20, 30, 40, 50];
    const { mean } = meanMedianMode(numbers);
    expect(mean).toEqual(30);
  });

  it("should return an object with the median of the given set of numbers", () => {
    const numbers = [10, 20, 30, 40, 50];
    const { median } = meanMedianMode(numbers);
    expect(median).toEqual(30);
  });

  it("should return an object with the median of the given set of numbers with an even number of values", () => {
    const numbers = [10, 20, 30, 40, 50, 60];
    const { median } = meanMedianMode(numbers);
    expect(median).toEqual(35);
  });

  it("should return an object with the mode of the given set of numbers", () => {
    const numbers = [10, 20, 30, 40, 50, 10];
    const { mode } = meanMedianMode(numbers);
    expect(mode).toEqual([10]);
  });

  it("should return multiple numbers in the array, if passed in data has multiple modes", () => {
    const numbers = [10, 20, 30, 40, 50, 10, 20];
    const { mode } = meanMedianMode(numbers);
    expect(mode).toEqual([10, 20]);
  });

  it("should return an empty array if there is no mode", () => {
    const numbers = [10, 20, 30, 40, 50];
    const { mode } = meanMedianMode(numbers);
    expect(mode).toEqual([]);
  });
});
