function chunkArray(array, size) {
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