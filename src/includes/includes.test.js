// Checks if value is in collection. If collection is a string, it's checked for a substring of value, 
// otherwise SameValueZero is used for equality comparisons. 
// If fromIndex is negative, it's used as the offset from the end of collection.

// _.includes([1, 2, 3], 1);
// => true
 
// _.includes([1, 2, 3], 1, 2);
// => false
 
// _.includes({ 'a': 1, 'b': 2 }, 1);
// => true
 
// _.includes('abcd', 'bc');
// => true

// includes.test.js

const includes = require('./includes');

describe('includes function', () => {
  it('should return true if the value is present in an array', () => {
    expect(includes([1, 2, 3], 1)).toBe(true);
  });

  it('should return false if the value is not present in an array', () => {
    expect(includes([1, 2, 3], 4)).toBe(false);
  });

  it('should handle fromIndex correctly for arrays', () => {
    expect(includes([1, 2, 3], 1, 2)).toBe(false);
    expect(includes([1, 2, 3], 3, 2)).toBe(true);
  });

  it('should return true if the value is present in an object', () => {
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toBe(true);
  });

  it('should return false if the value is not present in an object', () => {
    expect(includes({ 'a': 1, 'b': 2 }, 3)).toBe(false);
  });

  it('should handle fromIndex correctly for strings', () => {
    expect(includes('abcd', 'bc')).toBe(true);
    expect(includes('abcd', 'bc', 3)).toBe(false);
  });

  it('should return false if the collection is not an array, string, or object', () => {
    expect(includes(123, 1)).toBe(false);
    expect(includes(null, 1)).toBe(false);
  });
});
