import isPalindrome from "../index";

describe("Is Palindrome", () => {
  it("should return true if input is a palindrome with no spaces or punctuation", () => {
    expect(isPalindrome("anna")).toBe(true);
  });
  it("should return true if input is a palindrome with spaces and no punctuation", () => {
    expect(isPalindrome("dennis sinned")).toBe(true);
  });

  it("should return true if input is a palindrome with punctuation", () => {
    expect(isPalindrome("A car, a man, a maraca")).toBe(true);
  });

  it("should return false if input is not a palindrome", () => {
    expect(isPalindrome("A car, a man, several maracas")).toBe(false);
  });
});
