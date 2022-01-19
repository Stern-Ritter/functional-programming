import currying from "./currying";

let curriedFunction;

describe("Function currying()", () => {
  it("returns correct value for the numbers add function", () => {
    const add = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number
    ): number => a + b + c + d + e;
    curriedFunction = currying(add);
    expect(curriedFunction(1, 2, 3, 4, 5)).toBe(15);
    expect(curriedFunction(2, 3, 4)(5, 6)).toBe(20);
    expect(curriedFunction(3, 4)(5, 6)(7)).toBe(25);
    expect(curriedFunction(4, 5)(6)(7, 8)).toBe(30);
    expect(curriedFunction(5)(6)(7)(8)(9)).toBe(35);
  });
  it("returns correct value for the numbers multiplication function", () => {
    const add = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number
    ): number => a * b * c * d * e;
    curriedFunction = currying(add);
    expect(curriedFunction(1, 2, 3, 4, 5)).toBe(120);
    expect(curriedFunction(2, 3, 4)(5, 6)).toBe(720);
    expect(curriedFunction(3, 4)(5, 6)(7)).toBe(2520);
    expect(curriedFunction(4, 5)(6)(7, 8)).toBe(6720);
    expect(curriedFunction(5)(6)(7)(8)(9)).toBe(15120);
  });
  it("returns correct value for the strings concatination function", () => {
    const add = (
      a: string,
      b: string,
      c: string,
      d: string,
      e: string
    ): string => a + b + c + d + e;
    curriedFunction = currying(add);
    expect(curriedFunction('1','2', '3', '4', '5')).toBe('12345');
    expect(curriedFunction('2', '3', '4')('5', '6')).toBe('23456');
    expect(curriedFunction('3', '4')('5', '6')('7')).toBe('34567');
    expect(curriedFunction('4', '5')('6')('7', '8')).toBe('45678');
    expect(curriedFunction('5')('6')('7')('8')('9')).toBe('56789');
  });
});
