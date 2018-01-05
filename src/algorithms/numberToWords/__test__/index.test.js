import numberToWords from '../index';

describe('Number to Words', () => {
    it('should output "zero" if given number is 0', () => {
        expect(numberToWords(0)).toEqual('zero');
    });

    it('should output name of number if given number is between 1 and 20', () => {
        const expected = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty'
        ]

        for(let i = 0; i < expected.length; i++) {
            expect(numberToWords(i)).toEqual(expected[i]);
        }
    });

    it('should output base word + number if given number is greater than 21', () => {
        expect(numberToWords(21)).toEqual('twenty one');
        expect(numberToWords(35)).toEqual('thirty five');
        expect(numberToWords(76)).toEqual('seventy six');
    });

    it('should output number + hundred if given number is a multiple of 100', () => {
        expect(numberToWords(100)).toEqual('one hundred');
        expect(numberToWords(500)).toEqual('five hundred');
    });

    it('should output number + "hundred and " number if given number is greater than 100', () => {
        expect(numberToWords(110)).toEqual('one hundred and ten');
        expect(numberToWords(310)).toEqual('three hundred and ten');
        expect(numberToWords(999)).toEqual('nine hundred and ninety nine');
    });
});