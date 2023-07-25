const omitBy = require("./omitBy");

describe('omitBy function', () => {
  test('should omit number properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const result = omitBy(object, value => typeof value === 'number');
    expect(result).toEqual({ 'b': '2' });
  });

  test('should omit string properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': '3' };
    const result = omitBy(object, value => typeof value === 'string');
    expect(result).toEqual({ 'a': 1 });
  });

  test('should omit boolean properties', () => {
    const object = { 'a': true, 'b': '2', 'c': false };
    const result = omitBy(object, value => typeof value === 'boolean');
    expect(result).toEqual({ 'b': '2' });
  });

  test('should handle empty object', () => {
    const object = {};
    const result = omitBy(object, value => typeof value === 'number');
    expect(result).toEqual({});
  });

  test('should handle object with no properties to omit', () => {
    const object = { 'a': 1, 'b': '2', 'c': '3' };
    const result = omitBy(object, value => typeof value === 'boolean');
    expect(result).toEqual({ 'a': 1, 'b': '2', 'c': '3' });
  });
});
