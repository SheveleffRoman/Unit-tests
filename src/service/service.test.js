const service = require("./service");

describe('push method', () => {
  test('should add an item to the array', () => {
    const arr = [1, 2, 3];
    const itemToAdd = 4;
    service.push(arr, itemToAdd);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe('slice method', () => {
  test('should return a new array slice', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = service.slice(arr, 1, 4);
    expect(result).toEqual([2, 3, 4]);
  });

  test('should return the entire array when no end is specified', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = service.slice(arr, 1);
    expect(result).toEqual([2, 3, 4, 5]);
  });

  test('should return an empty array if start is greater than end', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = service.slice(arr, 3, 2);
    expect(result).toEqual([]);
  });

  test('should return an error when the input is not an array', () => {
    const result = service.slice('not an array', 1, 3);
    expect(result).toBeInstanceOf(Error);
  });
});

describe('filter method', () => {
  test('should return a new array with filtered elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (item) => item % 2 === 0;
    const result = service.filter(arr, callback);
    expect(result).toEqual([2, 4]);
  });
});

describe('forEach method', () => {
  test('should call the callback for each item in the array', () => {
    const arr = [1, 2, 3];
    const callback = jest.fn();
    service.forEach(arr, callback);
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(1, 0, arr);
    expect(callback).toHaveBeenCalledWith(2, 1, arr);
    expect(callback).toHaveBeenCalledWith(3, 2, arr);
  });
});

describe('hasProp method', () => {
  test('should return true if the object has the specified property', () => {
    const obj = { name: 'John', age: 30 };
    const property = 'age';
    const result = service.hasProp(obj, property);
    expect(result).toBe(true);
  });

  test('should return false if the object does not have the specified property', () => {
    const obj = { name: 'John', age: 30 };
    const property = 'address';
    const result = service.hasProp(obj, property);
    expect(result).toBe(false);
  });
});
