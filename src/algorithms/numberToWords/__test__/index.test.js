import numberToWords from '../index';

describe('Number to Words', () => {
    it('should output "zero" if given number is 0', () => {
        expect(numberToWords(0)).toEqual('zero');
    });

    it('should output name of number if given number is between 1 and 21', () => {
        expect(numberToWords(1)).toEqual('one');
        expect(numberToWords(5)).toEqual('five');
        expect(numberToWords(10)).toEqual('ten');
        expect(numberToWords(15)).toEqual('fifteen');
        expect(numberToWords(19)).toEqual('nineteen');
    });

    it('should output base word + number if given number is greater than 21', () => {
        expect(numberToWords(21)).toEqual('twenty one');
        expect(numberToWords(35)).toEqual('thirty five');
        expect(numberToWords(76)).toEqual('seventy six');
    });

    it('should output number + hundred if given number is a multiple of 100', () => {
        expect(numberToWords(100)).toEqual('one hundred');
    });

    it('should output number + "hundred and " number if given number is greater than 100', () => {
        expect(numberToWords(110)).toEqual('one hundred and ten');
        expect(numberToWords(310)).toEqual('three hundred and ten');
        expect(numberToWords(999)).toEqual('nine hundred and ninety nine');
    });
});