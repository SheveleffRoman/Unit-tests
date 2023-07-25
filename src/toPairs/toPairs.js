// Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. 
// If object is a map or set, its entries are returned.

// function Foo() {
//     this.a = 1;
//     this.b = 2;
//   }
   
//   Foo.prototype.c = 3;
   
//   _.toPairs(new Foo);
  // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)

  const toPairs = (obj) => {
    if (obj === null || typeof obj !== 'object') {
      throw new Error('Argument is not an object.');
    }
  
    return Object.entries(obj);
  }

  module.exports = toPairs;