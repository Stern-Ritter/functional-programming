import spiral from "./spiral";

const data = [
  {
    argument: [[1]],
    result: [1],
  },
  {
    argument: [[1], [7], [12], [15]],
    result: [1, 7, 12, 15],
  },
  {
    argument: [[1, 3, 8, 9]],
    result: [1, 3, 8, 9],
  },
  {
    argument: [
      [1, 3],
      [6, 7],
    ],
    result: [1, 3, 7, 6],
  },
  {
    argument: [
      [0, 1, 2],
      [5, 6, 7],
      [9, 3, 4],
    ],
    result: [0, 1, 2, 7, 4, 3, 9, 5, 6],
  },
  {
    argument: [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ],
    result: [
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ],
  },
];

describe("Function spiral()", () => {
  it("returns correct value", () => {
    data.forEach((test) => {
      expect(spiral(test.argument)).toEqual(test.result);
    });
  });
});
