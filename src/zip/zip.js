// Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
// the second of which contains the second elements of the given arrays, and so on.

// _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

const service = require('../service/service');

function zip(...args) {
  let result = [];
  let len = args[0].length;
  for (let i = 0; i < len; i++) {
    let presult = [];
    for (let y = 0; y < args.length; y++) {
      service.push(presult, args[y][i]);
    }
    service.push(result, presult);
  }
  return result;
}

  module.exports = zip;