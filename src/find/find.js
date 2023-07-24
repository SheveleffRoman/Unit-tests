// Iterates over elements of collection, returning the first element predicate returns truthy for. 
//The predicate is invoked with three arguments: (value, index|key, collection).

// var users = [
//     { 'user': 'barney',  'age': 36, 'active': true },
//     { 'user': 'fred',    'age': 40, 'active': false },
//     { 'user': 'pebbles', 'age': 1,  'active': true }
//   ];
   
//   _.find(users, function(o) { return o.age < 40; });
//   => object for 'barney'
   
//   The `_.matches` iteratee shorthand.
//   _.find(users, { 'age': 1, 'active': true });
//   => object for 'pebbles'
   
//   The `_.matchesProperty` iteratee shorthand.
//   _.find(users, ['active', false]);
//   => object for 'fred'
   
//   The `_.property` iteratee shorthand.
//   _.find(users, 'active');
//   => object for 'barney'

const find = (array, iteratee) => {
    if (!isIterable(array)) {
      throw new TypeError('First argument must be an array');
    }
  
    if (Array.isArray(iteratee)) {
      const [key, value] = iteratee;
      for (const item of array) {
        if (item[key] === value) {
          return item;
        }
      }
    } else if (typeof iteratee === 'function') {
      for (const item of array) {
        if (iteratee(item)) {
          return item;
        }
      }
    } else if (typeof iteratee === 'object') {
      for (const item of array) {
        let found = true;
        for (const key in iteratee) {
          if (item[key] !== iteratee[key]) {
            found = false;
            break;
          }
        }
        if (found) {
          return item;
        }
      }
    } else if (typeof iteratee === 'string') {
      for (const item of array) {
        if (item[iteratee]) {
          return item;
        }
      }
    } else {
      throw new TypeError('Second argument must be a function, an object, an array, or a string');
    }
  
    return undefined;
  }
  
  // Вспомогательная функция для проверки, что значение является итерируемым (массивом)
  function isIterable(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }
  

  module.exports = find;