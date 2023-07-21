// Creates a slice of array excluding elements dropped from the beginning. 
// Elements are dropped until predicate returns falsey. 
// The predicate is invoked with three arguments: (value, index, array).

// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
//   ];
   
//   _.dropWhile(users, function(o) { return !o.active; });
//    => objects for ['pebbles']
   
//    The `_.matches` iteratee shorthand.
//   _.dropWhile(users, { 'user': 'barney', 'active': false });
//    => objects for ['fred', 'pebbles']
   
//    The `_.matchesProperty` iteratee shorthand.
//   _.dropWhile(users, ['active', false]);
//    => objects for ['pebbles']
   
//    The `_.property` iteratee shorthand.
//   _.dropWhile(users, 'active');
//    => objects for ['barney', 'fred', 'pebbles']

const service = require("../service/service");

const dropWhile = (arr, callback) => {
    let i = 0;

        while(i < arr.length) {
            let result = callback(arr[i]);
            if(!result) {
                break;
            }
            i += 1;
        }
        return  service.slice(arr, i);
}

module.exports = dropWhile;