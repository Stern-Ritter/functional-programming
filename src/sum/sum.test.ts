import sum from "./sum";

let adder;

describe("Function", () => {
  it("returns correct value without initial value", () => {
    adder = sum();
    expect(+adder(1)).toBe(1);
    expect(+adder(1)(2)).toBe(3);
    expect(+adder(3)(4)(5)).toBe(12);
  });

  it("returns correct value with initial value", () => {
    adder = sum(3);
    expect(+adder(5)).toBe(8);
    expect(+adder(6)).toBe(9);
    expect(+adder(3)(4)(5)).toBe(15);
  });
});
