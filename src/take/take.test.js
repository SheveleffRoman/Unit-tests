// Creates a slice of array with n elements taken from the beginning.
// .take(array, [n=1])

// _.take([1, 2, 3]);
//  => [1]
 
// _.take([1, 2, 3], 2);
//  => [1, 2]
 
// _.take([1, 2, 3], 5);
//  => [1, 2, 3]
 
// _.take([1, 2, 3], 0);
//  => []

const take = require('./take');

describe('take function', () => {
    const inputArray = [1, 2, 3];
    
  test('should return an empty array when the input array is empty', () => {
    const result = take([]);
    expect(result).toEqual([]);
  });

  test('should return the first element of the array when no second argument is provided', () => {
    const result = take(inputArray);
    expect(result).toEqual([1]);
  });

  test('should return the first n elements of the array when a second argument (n) is provided', () => {
    const n = 2;
    const result = take(inputArray, n);
    expect(result).toEqual([1, 2]);
  });

  test('should return the whole array if n is greater than the array length', () => {
    const n = 5;
    const result = take(inputArray, n);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should return an empty array if n is 0', () => {
    const n = 0;
    const result = take(inputArray, n);
    expect(result).toEqual([]);
  });

  test('should return an empty array if n is a negative number', () => {
    const n = -2;
    const result = take(inputArray, n);
    expect(result).toEqual([]);
  });
});
