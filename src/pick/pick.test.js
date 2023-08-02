// Creates an object composed of the picked object properties.

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

const pick = require("./pick");

describe('pick function', () => {
  test('should return an empty object if the input object is empty', () => {
    const object = {};
    const keysToPick = ['a', 'b', 'c'];
    expect(pick(object, keysToPick)).toEqual({});
  });

  test('should return an empty object if no matching keys are found', () => {
    const object = { 'x': 1, 'y': '2', 'z': 3 };
    const keysToPick = ['a', 'b', 'c'];
    expect(pick(object, keysToPick)).toEqual({});
  });

  test('should return a new object with the selected key-value pairs', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3, 'd': '4' };
    const keysToPick = ['a', 'c', 'e'];
    const expectedOutput = { 'a': 1, 'c': 3 };
    expect(pick(object, keysToPick)).toEqual(expectedOutput);
  });

  test('should not modify the original object', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const keysToPick = ['a', 'c'];
    pick(object, keysToPick);
    expect(object).toEqual({ 'a': 1, 'b': '2', 'c': 3 });
  });
});
