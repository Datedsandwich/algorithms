import numberToWords from "../index";

describe("Number to Words", () => {
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  it('should output "zero" if given number is 0', () => {
    expect(numberToWords(0)).toEqual("zero");
  });

  it("should output name of number if given number is between 1 and 20", () => {
    const expected = [
      ...units,
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty"
    ];

    for (let i = 1; i < expected.length; i++) {
      expect(numberToWords(i)).toEqual(expected[i]);
    }
  });

  it("should output base word + number if given number is greater than 21", () => {
    for (let ten = 2; ten < tens.length; ten++) {
      for (let unit = 0; unit < units.length; unit++) {
        expect(numberToWords(ten + "" + unit)).toEqual(
          (tens[ten] + " " + units[unit]).trim()
        );
      }
    }
  });

  it("should output unit + hundred if given number is a multiple of 100", () => {
    for (let unit = 1; unit < units.length; unit++) {
      expect(numberToWords(unit * 100)).toEqual(units[unit] + " hundred");
    }
  });

  it('should output number + "hundred and " number if given number is greater than 100', () => {
    // Could do as the above tests, to test every number up to 999 comprehensively.
    // However, the nested loops quickly become very difficult to read.
    expect(numberToWords(110)).toEqual("one hundred and ten");
    expect(numberToWords(315)).toEqual("three hundred and fifteen");
    expect(numberToWords(547)).toEqual("five hundred and forty seven");
    expect(numberToWords(999)).toEqual("nine hundred and ninety nine");
  });
});
