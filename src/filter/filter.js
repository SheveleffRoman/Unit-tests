// Iterates over elements of `array`, returning an array of all elements
// `predicate` returns truthy for. The predicate is invoked with three
// arguments: (value, index|key, collection).
// const users = [
// _.filter(users, function(o) { return !o.active; });
// => objects for ['fred']
     
// The `_.matches` iteratee shorthand.
// _.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']
     
// The `_.matchesProperty` iteratee shorthand.
// _.filter(users, ['active', false]);
// => objects for ['fred']
     
// The `_.property` iteratee shorthand.
// _.filter(users, 'active');
// => objects for ['barney']

const service = require('../service/service')

const filter = (arr, predicate) => {
    if (typeof predicate === 'function') {
        return service.filter(arr, predicate);
    }
    if (Array.isArray(predicate)) {
        let x = [];
        service.forEach(arr, item => {
          for (key in item) {
            if (predicate[0] === key && item[key] === predicate[1])       {
           service.push(x, item)
            }
          }
        });
        return x;
    }
    if (typeof predicate === 'object') {
        let x = [];
        service.forEach(arr, item => {
            if (item.age === predicate.age && item.active === predicate.active) {
              service.push(x, item);
          }
        })
        return x;
    }
    if (typeof predicate === 'string') {
        let x = [];
         service.forEach(arr, item => {
             if (item[predicate]) {
                service.push(x, item);
             }
         })
        return x;
    }

}
  
module.exports = filter;