// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the remaining elements.

// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const chunkArray = (array, size) => {
    if (!Array.isArray(array) || size <= 0) {
      throw new Error('Invalid input: "array" should be an array and "size" should be a positive number.');
    }
  
    const result = [];
    let chunk = [];
  
    for (let i = 0; i < array.length; i++) {
      chunk[chunk.length] = array[i];
  
      if (chunk.length === size || i === array.length - 1) {
        result[result.length] = chunk;
        chunk = [];
      }
    }
  
    return result;
  }

  module.exports = chunkArray;