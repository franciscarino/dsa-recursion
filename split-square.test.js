const { simplify } = require('./split-square');

describe("simplify", function() {
  it("simplify to work", function() {
    expect(simplify(0)).toBe(0);
    expect(simplify([1, 1, 1, 1])).toBe(1);
    expect(simplify([0, 0, 0, 0])).toBe(0);
    expect(simplify([1, 0, 1, 0])).toEqual([1, 0, 1, 0]);
    expect(simplify([1, 0, 1, [1, 1, 1, 1]])).toEqual([1, 0, 1, 1]);
    expect(simplify([1, 1, 1, [1, 1, 1, 1]])).toEqual(1);
    expect(simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])).toEqual(1);
    expect(simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])).toEqual([1, 0, [1, 0, 1, 1], 1]);
  });
});