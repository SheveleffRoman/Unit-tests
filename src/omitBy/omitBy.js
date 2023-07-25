// The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string 
// keyed properties of object that predicate doesn't return truthy for. 
// The predicate is invoked with two arguments: (value, key).

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.omitBy(object, _.isNumber);
// => { 'b': '2' }

const service = require('../service/service')

function omitBy(object, predicate) {
    const result = {};
    for (const key in object) {
      if (service.hasProp(object, key) && !predicate(object[key])) {
        result[key] = object[key];
      }
    }
    return result;
  }

module.exports = omitBy;
  