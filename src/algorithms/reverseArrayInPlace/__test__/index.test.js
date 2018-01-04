import reverseArrayInPlace from '../index';

describe('Reverse Array in Place', () => {
    it('should return reversed array', () => {
        let array = [1, 2, 3];

        expect(reverseArrayInPlace(array)).toEqual([3, 2, 1]);
    });

    it('should modify passed in array', () => {
        let array = [1, 2, 3];

        reverseArrayInPlace(array);

        expect(array).toEqual([3, 2, 1]);
    });
});