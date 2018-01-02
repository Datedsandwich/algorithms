import caeserCipher from '../index';

describe('Caeser Cipher', () => {
    it('should shift each character in the passed in string forward by the number passed in', () => {
        expect(caeserCipher('zoo keeper', 2)).toEqual('bqq mggrgt');
    });

    it('should be able to shift characters backwards if a negative number is passed in', () => {
        expect(caeserCipher('c', -2)).toEqual('a');
    });
});