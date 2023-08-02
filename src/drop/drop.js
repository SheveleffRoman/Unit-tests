// Creates a slice of array with n elements dropped from the beginning.

// _.drop([1, 2, 3]);
// => [2, 3]
 
// _.drop([1, 2, 3], 2);
// => [3]
 
// _.drop([1, 2, 3], 5);
// => []
 
// _.drop([1, 2, 3], 0);
// => [1, 2, 3]

const service = require('../service/service');

const drop = (arr, n) => {
        if (!Array.isArray(arr)) {
          throw new Error('Invalid input: "array" should be an array.');
        }
      
        return service.slice(arr, n);
}

module.exports = drop;