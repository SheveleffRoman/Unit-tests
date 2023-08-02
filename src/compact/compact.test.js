// Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.

// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

const compact = require("./compact")

describe('compact', () => {
    test('should remove falsey values from the array', () => {
      const arr1 = [0, 1, false, 2, '', 3];
      expect(compact(arr1)).toEqual([1, 2, 3]);
    });
  
    test('should handle an empty array', () => {
      expect(compact([])).toEqual([]);
    });
  
    test('should handle an array with no falsey values', () => {
      const arr2 = [1, 2, 3];
      expect(compact(arr2)).toEqual([1, 2, 3]);
    });
  
    test('should handle an array with all falsey values', () => {
      const arr3 = [null, undefined, '', 0, false, NaN];
      expect(compact(arr3)).toEqual([]);
    });
  
    test('should throw an error for non-array input', () => {
      expect(() => compact('not_an_array')).toThrow('Invalid input: "array" should be an array.');
    });
  });