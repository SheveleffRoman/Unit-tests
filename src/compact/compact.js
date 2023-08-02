// Creates an array with all falsey values removed. 
// The values false, null, 0, "", undefined, and NaN are falsey.

// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

const service = require('../service/service')

const compact = (array) => {
    if (!Array.isArray(array)) {
      throw new Error('Invalid input: "array" should be an array.');
    }
  
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        service.push(result, array[i])
      }
    }
  
    return result;
  };

  module.exports = compact;