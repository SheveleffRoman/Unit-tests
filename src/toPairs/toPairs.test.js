const toPairs = require('./toPairs');
  
  describe('ownPropertiesToPairs', () => {
    it('returns an array of own property key-value pairs for an object without a prototype', () => {
      const obj = { a: 1, b: 2 };
      const result = toPairs(obj);
      expect(result).toEqual(expect.arrayContaining([['a', 1], ['b', 2]]));
      expect(result.length).toBe(2);
    });
  
    it('returns an array of own property key-value pairs for an object with a prototype', () => {
      function Foo() {
        this.a = 1;
        this.b = 2;
      }
      Foo.prototype.c = 3;
  
      const obj = new Foo();
      const result = toPairs(obj);
      expect(result).toEqual(expect.arrayContaining([['a', 1], ['b', 2]]));
      expect(result).not.toEqual(expect.arrayContaining([['c', 3]]));
      expect(result.length).toBe(2);
    });
  
    it('throws an error when called with a non-object argument', () => {
      expect(() => toPairs(null)).toThrow(Error);
      expect(() => toPairs('not an object')).toThrow(Error);
      expect(() => toPairs(123)).toThrow(Error);
      expect(() => toPairs(undefined)).toThrow(Error);
    });
  });
  