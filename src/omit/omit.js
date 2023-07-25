// The opposite of _.pick; this method creates an object composed of the own and inherited enumerable 
//property paths of object that are not omitted.

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.omit(object, ['a', 'c']);
// => { 'b': '2' }

const service = require('../service/service')

function omit(object, propsToOmit) {
    if (!object || typeof object !== 'object' || Array.isArray(object)) {
      throw new Error('Invalid input. The first argument should be an object.');
    }
  
    if (!Array.isArray(propsToOmit)) {
      throw new Error('Invalid input. The second argument should be an array of property names to omit.');
    }
  
    const result = {};
    const omitSet = new Set(propsToOmit);
  
    for (const key in object) {
      if (service.hasProp(object, key) && !omitSet.has(key)) {
        result[key] = object[key];
      }
    }
  
    return result;
  }

  module.exports = omit;