import alphabet from "../../constants";

const caeserCipher = (text, number) => {
  number = number % 26;
  let newString = "";

  text.split("").forEach(char => {
    if (char === " ") {
      newString += char;
      return;
    }

    const currentIndex = alphabet.indexOf(char.toLowerCase());
    let newIndex = currentIndex + number;

    if (newIndex > 25) {
      newIndex -= 26;
    } else if (newIndex < 0) {
      newIndex += 26;
    }

    newString +=
      char === char.toUpperCase()
        ? alphabet[newIndex].toUpperCase()
        : alphabet[newIndex];
  });

  return newString;
};

export default caeserCipher;
