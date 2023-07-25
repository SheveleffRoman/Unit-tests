// This method is like _.assign except that it recursively merges own and inherited enumerable string keyed
// properties of source objects into the destination object. 
// Source properties that resolve to undefined are skipped if a destination value exists. 
// Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. 
// Source objects are applied from left to right. Subsequent sources overwrite 
// property assignments of previous sources.

// var object = {
//     'a': [{ 'b': 2 }, { 'd': 4 }]
//   };
   
//   var other = {
//     'a': [{ 'c': 3 }, { 'e': 5 }]
//   };
   
//   _.merge(object, other);
//   => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

const service = require('../service/service')

function merge(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return obj2;
  }
  for (let key in obj2) {
    if (service.hasProp(obj2, key)) {
      if (service.hasProp(obj1, key)) {
        obj1[key] = merge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }

  return obj1;
}

module.exports = merge;