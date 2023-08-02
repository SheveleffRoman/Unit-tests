// Creates an object composed of the object properties predicate returns truthy for. 
// The predicate is invoked with two arguments: (value, key).

// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }

const pickBy = require("./pickBy");

  describe('pickBy', () => {
    it('should pick only numbers from the object', () => {
      const object = { 'a': 1, 'b': '2', 'c': 3, 'd': 'hello' };
      const pickedNumbers = pickBy(object, (value) => typeof value === 'number');
      expect(pickedNumbers).toEqual({ 'a': 1, 'c': 3 });
    });
  
    it('should pick values greater than 10 from the object', () => {
      const object = { 'a': 5, 'b': 15, 'c': 3, 'd': 20 };
      const pickedValues = pickBy(object, (value) => value > 10);
      expect(pickedValues).toEqual({ 'b': 15, 'd': 20 });
    });
  
    it('should pick strings with length greater than 3 from the object', () => {
      const object = { 'a': 'hello', 'b': 'hi', 'c': 'world', 'd': 'a' };
      const pickedStrings = pickBy(object, (value) => typeof value === 'string' && value.length > 3);
      expect(pickedStrings).toEqual({ 'a': 'hello', 'c': 'world' });
    });
  
    it('should pick objects with specific property from the object', () => {
      const object = {
        'a': { name: 'John', age: 30 },
        'b': { name: 'Jane', age: 25 },
        'c': { name: 'Bob' },
        'd': { age: 40 },
      };
      const pickedObjects = pickBy(object, (value) => typeof value === 'object' && value.hasOwnProperty('name'));
      expect(pickedObjects).toEqual({ 'a': { name: 'John', age: 30 }, 'b': { name: 'Jane', age: 25 }, 'c': { name: 'Bob' } });
    });
  
    it('should return an empty object if no values match the predicate', () => {
      const object = { 'a': 1, 'b': '2', 'c': 3, 'd': 'hello' };
      const picked = pickBy(object, (value) => value === 'none');
      expect(picked).toEqual({});
    });
  
    it('should return an empty object if the input object is empty', () => {
      const object = {};
      const picked = pickBy(object, () => true);
      expect(picked).toEqual({});
    });
  });
  