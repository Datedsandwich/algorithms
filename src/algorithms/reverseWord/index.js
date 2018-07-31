import alphabet from '../../constants';

/*
 * Rules: 
 * 1. Each word in the string should be reversed, but word order should be maintained.
 * 2. Cannot use the Array.reverse() function.
*/

const reverseWord = (text) => {
    const words = text.split(' ');
    let reversedWords = [];

    words.forEach((word) => {
        let reversedWord = '';

        for(let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        reversedWords = [...reversedWords, reversedWord];
    });

    return reversedWords.join(' ');
}

export default reverseWord;