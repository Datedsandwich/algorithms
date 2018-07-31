import alphabet from '../../constants';

const isPalindrome = (text) => {
    const charArray = text.toLowerCase().split('');
    const validCharacters = alphabet;

    const letters = charArray.filter((char) => {
        return validCharacters.includes(char);
    });

    return letters.join('') === letters.reverse().join('');
}

export default isPalindrome;