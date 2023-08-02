const zip = require('./zip');

describe('zip', () => {
    it('combines arrays into tuples', () => {
        expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
            ['a', 1, true],
            ['b', 2, false],
        ]);
    });

    it('returns an empty array when an empty array is passed', () => {
        expect(zip([], [1, 2], [true, false])).toEqual([]);
    });

    it('works with different types of elements in arrays', () => {
        expect(zip([1, 2, 3], ['a', 'b', 'c'], [true, false, true])).toEqual([
            [1, 'a', true],
            [2, 'b', false],
            [3, 'c', true],
        ]);
    });
});
