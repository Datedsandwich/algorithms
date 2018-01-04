import reverseArrayInPlace from '../index';

describe('Reverse Array in Place', () => {
    it('should reverse array', () => {
        let array = [1, 2, 3];

        reverseArrayInPlace(array);

        expect(array).toEqual([3, 2, 1]);
    });
});