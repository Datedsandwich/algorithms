import reverseWord from '../index';

describe('Reverse Word', () => {
    it('should reverse every word in the passed in string', () => {
        expect(reverseWord('hello world')).toEqual('olleh dlrow');
    });

    it('should maintain character case', () => {
        expect(reverseWord('Hello World')).toEqual('olleH dlroW');
    });
});