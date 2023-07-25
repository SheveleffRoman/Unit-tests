// Creates an object composed of the picked object properties.

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

const service = require('../service/service');

const pick = (object, keysToPick) => {
    const pickedObject = {};
  
    for (const key of keysToPick) {
      if (service.hasProp(object, key)) {
        pickedObject[key] = object[key];
      }
    }
  
    return pickedObject;
  }

module.exports = pick;
  