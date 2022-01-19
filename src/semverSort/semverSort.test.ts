import semverSort from "./semverSort";

const data = [
  {
    argument: [],
    result: []
  },
  {
    argument: [ "0.1" ],
    result: [ "0.1" ]
  },
  {
    argument: [ "0.11", "0.11" ],
    result: ["0.11", "0.11"]
  },
  {
    argument: [ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"],
    result: [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
  },
  {
    argument: [ "10.1.12", "9.8", "10.0.1", "9.8.1", "0.12", "6.3", "6.0.3.10" ],
    result:  [ "0.12", "6.0.3.10", "6.3","9.8", "9.8.1", "10.0.1", "10.1.12" ]
  },
  {
    argument: [ "0.11.50", "0", "2.3", "2.1.16", "5.45", "5.7.56", "4.12.100.1"],
    result: [ "0", "0.11.50", "2.1.16", "2.3", "4.12.100.1", "5.7.56", "5.45" ]
  }
];

describe("Function semverSort()", () => {
  it("returns correct value", () => {
    data.forEach((test) => {
      expect(semverSort(test.argument)).toEqual(test.result);
    });
  });
});
