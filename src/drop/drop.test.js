// Creates a slice of array with n elements dropped from the beginning.

// _.drop([1, 2, 3]);
// => [2, 3]
 
// _.drop([1, 2, 3], 2);
// => [3]
 
// _.drop([1, 2, 3], 5);
// => []
 
// _.drop([1, 2, 3], 0);
// => [1, 2, 3]

const drop = require('./drop');

describe('drop', () => {
  test('should drop n elements from the beginning of the array', () => {
    const arr1 = [1, 2, 3];
    expect(drop(arr1, 1)).toEqual([2, 3]);
    expect(drop(arr1, 2)).toEqual([3]);
  });

  test('should return an empty array if n is greater than or equal to the array length', () => {
    const arr2 = [1, 2, 3];
    expect(drop(arr2, 5)).toEqual([]);
    expect(drop(arr2, arr2.length)).toEqual([]);
  });

  test('should handle n being 0', () => {
    const arr3 = [1, 2, 3];
    expect(drop(arr3, 0)).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    expect(drop([], 2)).toEqual([]);
  });

  test('should throw an error for non-array input', () => {
    expect(() => drop('not_an_array')).toThrow('Invalid input: "array" should be an array.');
  });
});