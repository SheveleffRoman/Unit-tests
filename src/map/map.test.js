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

const map = require('./map');

function square(n) {
  return n * n;
}

describe('map', () => {
  it('should map over an array with a function', () => {
    const inputArray = [4, 8];
    const expectedResult = [16, 64];
    const result = map(inputArray, square);
    expect(result).toEqual(expectedResult);
  });

  it('should map over an object with a function', () => {
    const inputObject = { 'a': 4, 'b': 8 };
    const expectedResult = [16, 64];
    const result = map(inputObject, square);
    expect(result).toEqual(expectedResult);
  });

  it('should map over an array with a property string', () => {
    const users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];
    const expectedResult = ['barney', 'fred'];
    const result = map(users, 'user');
    expect(result).toEqual(expectedResult);
  });
});
