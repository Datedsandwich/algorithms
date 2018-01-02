import alphabet from '../../constants';

const caeserCipher = (text, number) => {
    number = number % 26;

    const lowerCaseText = text.toLowerCase();
    let newString = '';

    for(let i = 0; i < lowerCaseText.length; i++) {
        const currentCharacter = lowerCaseText[i];

        if(currentCharacter === ' ') {
            newString += currentCharacter;
            continue;
        }

        const currentIndex = alphabet.indexOf(currentCharacter);
        let newIndex = currentIndex + number;

        if(newIndex > 25) {
            newIndex -= 26;
        } else if (newIndex < 0) {
            newIndex += 26;
        }

        if(text[i] === text[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }
    }

    return newString;
}

export default caeserCipher;