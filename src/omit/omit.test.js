// The opposite of _.pick; this method creates an object composed of the own and inherited enumerable 
//property paths of object that are not omitted.


// var object = { 'a': 1, 'b': '2', 'c': 3 };
 
// _.omit(object, ['a', 'c']);
// => { 'b': '2' }

const omit = require("./omit");

describe("omit", () => {
  const object = { a: 1, b: "2", c: 3 };

  test("should return an object with omitted properties", () => {
    const propsToOmit = ["a", "c"];
    const result = omit(object, propsToOmit);
    expect(result).toEqual({ b: "2" });
  });

  test("should not modify the original object", () => {
    const propsToOmit = ["a", "c"];
    omit(object, propsToOmit);
    expect(object).toEqual({ a: 1, b: "2", c: 3 });
  });

  test("should return an empty object if all properties are omitted", () => {
    const propsToOmit = ["a", "b", "c"];
    const result = omit(object, propsToOmit);
    expect(result).toEqual({});
  });

  test("should throw an error if the first argument is not an object", () => {
    expect(() => omit("not an object", ["prop"])).toThrow(
      "Invalid input. The first argument should be an object."
    );
  });

  test("should throw an error if the second argument is not an array", () => {
    expect(() => omit(object, "not an array")).toThrow(
      "Invalid input. The second argument should be an array of property names to omit."
    );
  });
});
