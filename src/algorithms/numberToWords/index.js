/*
 * Write a function that spells out a number in the range [0,999]. For example:
       0 --> zero
      17 --> seventeen
      99 --> ninety nine
     300 --> three hundred
     310 --> three hundred and ten
     999 --> nine hundred and ninety nine
 */

const numberToWords = (number) => {
    const numbers = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 100) {
        if(number % 100 > 0) {
            return numberToWords(Math.floor(number/100)) + ' hundred and ' + numberToWords(Math.floor(number % 100));
        } else {
            return numberToWords(Math.floor(number/100)) + ' hundred';
        }
    } else if (number >= 21) {
        const digit = number % 10;

        return tens[Math.floor(number / 10)] + (digit ? ' ' + numbers[digit] : '');
    } else {
        return numbers[number];
    }
}

export default numberToWords;