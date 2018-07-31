import meanMedianMode from "../index";

describe("Mean Median Mode", () => {
  it("should return an object with the mean of the given set of numbers", () => {
    const numbers = [10, 20, 30, 40, 50];
    const { mean } = meanMedianMode(numbers);
    expect(mean).toBe(30);
  });

  it("should return an object with the median of the given set of numbers", () => {
    const numbers = [10, 20, 30, 40, 50];
    const { median } = meanMedianMode(numbers);
    expect(median).toBe(30);
  });

  it("should return an object with the median of the given set of numbers with an even number of values", () => {
    const numbers = [10, 20, 30, 40, 50, 60];
    const { median } = meanMedianMode(numbers);
    expect(median).toBe(35);
  });

  it("should return an object with the mode of the given set of numbers", () => {
    const numbers = [10, 20, 30, 40, 50, 10];
    const { mode } = meanMedianMode(numbers);
    expect(mode).toBe(10);
  });
});
