// Creates an array of values by running each element in collection thru iteratee. 
//The iteratee is invoked with three arguments:(value, index|key, collection).

// function square(n) {
//     return n * n;
//   }
   
//   _.map([4, 8], square);
//   => [16, 64]
   
//   _.map({ 'a': 4, 'b': 8 }, square);
//   => [16, 64] (iteration order is not guaranteed)
   
//   var users = [
//     { 'user': 'barney' },
//     { 'user': 'fred' }
//   ];
   
//   The `_.property` iteratee shorthand.
//   _.map(users, 'user');
//   => ['barney', 'fred']

// const map = (array, iteratee) => {
//     let index = -1
//     const length = array == null ? 0 : array.length
//     const result = new Array(length)
  
//     while (++index < length) {
//       result[index] = iteratee(array[index], index, array)
//     }
//     return result
//   }

const service = require('../service/service');

const map = (collection, callback) => {
    let result = [];
    if (typeof callback === 'string') {
       for (let i=0;i<collection.length;i++) {
           for (let key in collection[i]) {
               if (key === callback) {
                   service.push(result, collection[i][key])
               }
           }
       }
    }
    if (Array.isArray(collection) && typeof callback != 'string') {
       result = [];
       for (let i=0;i<collection.length;i++) {
           service.push(result, callback(collection[i]))
       }
   }
    if (typeof collection === 'object' && typeof callback === 'function') {
       result = [];
       for (let key in collection) {
           service.push(result, callback(collection[key]))
       }
    }
    return result;
   }
  
  module.exports = map;