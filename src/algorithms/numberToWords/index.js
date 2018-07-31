/*
 * Write a function that spells out a number in the range [0,999]. For example:
       0 --> zero
      17 --> seventeen
      99 --> ninety nine
     300 --> three hundred
     310 --> three hundred and ten
     999 --> nine hundred and ninety nine
 */

const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const numberToWords = (number) => {
    if (number < 21) {
        // Early escape
        return units[number];
    }

    let words = '';

    if (Math.floor(number / 100) > 0) {
        words += numberToWords(Math.floor(number / 100)) + ' hundred';
        number = number % 100;
    }

    if (number > 0) {
        if (words != '') {
            words += ' and ';
        }

        if (number < 20) {
            words += units[number];
        }
        else {
            words += tens[Math.floor(number / 10)];
            if ((number % 10) > 0) {
                words += ' ' + units[Math.floor(number % 10)];
            }
        }
    }

    return words;
}

export default numberToWords;