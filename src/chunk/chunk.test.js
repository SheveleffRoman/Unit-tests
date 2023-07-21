// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.

// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const chunkArray = require("./chunk");

describe('chunkArray', () => {
    test('should split an array into chunks of specified size', () => {
      const arr1 = ['a', 'b', 'c', 'd'];
      expect(chunkArray(arr1, 2)).toEqual([['a', 'b'], ['c', 'd']]);
      expect(chunkArray(arr1, 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });
  
    test('should handle empty array', () => {
      expect(chunkArray([], 2)).toEqual([]);
    });
  
    test('should handle size greater than array length', () => {
      const arr2 = ['a', 'b', 'c', 'd'];
      expect(chunkArray(arr2, 5)).toEqual([['a', 'b', 'c', 'd']]);
    });
  
    test('should handle negative size', () => {
      const arr3 = ['a', 'b', 'c', 'd'];
      expect(() => chunkArray(arr3, -1)).toThrow('Invalid input: "array" should be an array and "size" should be a positive number.');
    });
  
    test('should handle non-array input', () => {
      expect(() => chunkArray('abc', 2)).toThrow('Invalid input: "array" should be an array and "size" should be a positive number.');
    });
  });