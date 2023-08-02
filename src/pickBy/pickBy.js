// Creates an object composed of the object properties predicate returns truthy for. 
// The predicate is invoked with two arguments: (value, key).

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

const service = require('../service/service');


const pickBy = (object, predicate) => {
    const result = {};
    for (const key in object) {
      if (predicate(object[key])) {
        result[key] = object[key];
      }
    }
    return result;
  }

  module.exports = pickBy;
  
  