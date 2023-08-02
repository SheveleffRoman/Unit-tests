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

const dropWhile = require('./dropWhile');


describe('dropWhile function', () => {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  test('should drop elements until the callback condition is no longer satisfied', () => {
    const callback = (user) => user.active === false;
    const result = dropWhile(users, callback);
    expect(result).toEqual([{ 'user': 'pebbles', 'active': true }]);
  });

  test('should return the whole array if the callback condition is never false', () => {
    const callback = (user) => user.active === true;
    const result = dropWhile(users, callback);
    expect(result).toEqual(users);
  });
});
