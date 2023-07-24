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

const find = require('./find');

describe('find', () => {
  const users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

  it('should return the object for the first user with age less than 40', () => {
    const result = find(users, function(o) { return o.age < 40; });
    expect(result).toEqual(users[0]);
  });

  it('should return the object for the user with age 1 and active true', () => {
    const result = find(users, { 'age': 1, 'active': true });
    expect(result).toEqual(users[2]);
  });

  it('should return the object for the user with active false', () => {
    const result = find(users, ['active', false]);
    expect(result).toEqual(users[1]);
  });

  it('should return the object for the user with the "active" property', () => {
    const result = find(users, 'active');
    expect(result).toEqual(users[0]);
  });

  it('should return undefined if the condition is not met', () => {
    const result = find(users, function(o) { return o.age > 50; });
    expect(result).toBeUndefined();
  });

  it('should throw an error if the first argument is not an array', () => {
    expect(() => find({}, 'active')).toThrow(TypeError);
    expect(() => find('users', 'active')).toThrow(TypeError);
    expect(() => find(123, 'active')).toThrow(TypeError);
  });
  
});
