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

const service = require("../service/service");

const take = (array, n=1) => {
    if (!(array != null && array.length)) {
      return []
    }
    return service.slice(array, 0, n < 0 ? 0 : n)
  }

  module.exports = take;