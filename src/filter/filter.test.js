const filter = require('./filter');

describe('filter', () => {
  it('should filter objects for {!o.active}', () => {
    const users = [
      { name: 'fred', active: false },
      { name: 'barney', active: true },
    ];

    const result = filter(users, (o) => !o.active);

    expect(result).toEqual([{ name: 'fred', active: false }]);
  });

  it('should filter objects for { age: 36, active: true }', () => {
    const users = [
      { name: 'fred', age: 36, active: false },
      { name: 'barney', age: 36, active: true },
    ];

    const result = filter(users, { age: 36, active: true });

    expect(result).toEqual([{ name: 'barney', age: 36, active: true }]);
  });

  it('should filter objects for ["active", false]', () => {
    const users = [
      { name: 'fred', active: false },
      { name: 'barney', active: true },
    ];

    const result = filter(users, ['active', false]);

    expect(result).toEqual([{ name: 'fred', active: false }]);
  });

  it('should filter objects for "active"', () => {
    const users = [
      { name: 'fred', active: false },
      { name: 'barney', active: true },
    ];

    const result = filter(users, 'active');

    expect(result).toEqual([{ name: 'barney', active: true }]);
  });

  it('should return an empty array for an empty input array', () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  it('should return an empty array when the predicate always returns false', () => {
    const users = [
      { name: 'fred', active: false },
      { name: 'barney', active: false },
    ];

    const result = filter(users, () => false);

    expect(result).toEqual([]);
  });
});

