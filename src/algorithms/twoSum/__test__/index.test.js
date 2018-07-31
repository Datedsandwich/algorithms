import twoSum from "../index";

describe("Two Sum", () => {
  it("should return every pair of numbers in the given array that add up to the sum", () => {
    const numbers = [1, 6, 4, 5, 3, 3];
    expect(twoSum(numbers, 7)).toEqual([[6, 1], [3, 4], [3, 4]]);
  });

  it("should return every pair of numbers in the given array that add up to the sum, handling negative numbers", () => {
    const numbers = [40, 11, 19, 17, -12];
    expect(twoSum(numbers, 28)).toEqual([[17, 11], [-12, 40]]);
  });
});
