const isPalindrome = (text) => {
    const charArray = text.toLowerCase().split('');
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const letters = charArray.filter((char) => {
        return validCharacters.includes(char);
    });

    return letters.join('') === letters.reverse().join('');
}

export default isPalindrome;