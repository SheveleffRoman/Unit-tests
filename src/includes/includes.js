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

const service = require('../service/service')

const includes = (collection, value, fromIndex = 0) => {
    if (Array.isArray(collection)) {
      const length = collection.length;
      let startIndex = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);
  
      for (let i = startIndex; i < length; i++) {
        if (collection[i] === value) {
          return true;
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key) && collection[key] === value) {
          return true;
        }
      }
    } else if (typeof collection === 'string') {
      const length = collection.length;
      let startIndex = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);
      const endIndex = length - value.length;
  
      for (let i = startIndex; i <= endIndex; i++) {
        if (collection.slice(i, i + value.length) === value) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  

  module.exports = includes;