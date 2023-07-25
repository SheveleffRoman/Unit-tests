// This method is like _.assign except that it recursively merges own and inherited enumerable string keyed
// properties of source objects into the destination object. 
// Source properties that resolve to undefined are skipped if a destination value exists. 
// Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. 
// Source objects are applied from left to right. Subsequent sources overwrite 
// property assignments of previous sources.

// var object = {
//     'a': [{ 'b': 2 }, { 'd': 4 }]
//   };
   
//   var other = {
//     'a': [{ 'c': 3 }, { 'e': 5 }]
//   };
   
//   _.merge(object, other);
//   => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

const merge = require('./merge');

describe('merge', () => {
    it('should merge two objects with different keys', () => {
        const obj1 = { 'a': 1 };
        const obj2 = { 'b': 2 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ 'a': 1, 'b': 2 });
    });

    it('should merge two objects with same keys', () => {
        const obj1 = { 'a': 1, 'b': 2 };
        const obj2 = { 'b': 3, 'c': 4 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ 'a': 1, 'b': 3, 'c': 4 });
      });

    it('should recursively merge nested objects', () => {
        const obj1 = { 'a': { 'b': 1, 'c': { 'd': 2 } } };
        const obj2 = { 'a': { 'b': 3, 'c': { 'e': 4 } } };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ 'a': { 'b': 3, 'c': { 'd': 2, 'e': 4 } } });
      });
    
    it('should handle merging arrays', () => {
        const obj1 = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
        const obj2 = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
      });
    
    it('should handle merging arrays with non-object elements', () => {
        const obj1 = { 'a': [1, 2, 3] };
        const obj2 = { 'a': [4, 5] };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ 'a': [4, 5, 3] });
      });
    
    it('should return the second object if the first object is not an object', () => {
        const obj1 = null;
        const obj2 = { 'a': 1 };
        const result = merge(obj1, obj2);
        expect(result).toEqual({ 'a': 1 });
      });
    
      it('should return the second object if the second object is not an object', () => {
        const obj1 = { 'a': 1 };
        const obj2 = null;
        const result = merge(obj1, obj2);
        expect(result).toEqual(null);
      });
})