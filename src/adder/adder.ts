const sum = (init: number = 0) => {
  let result = init;
  function inner(num: number): number {
    result += num;
    return inner;
  }
  inner.valueOf = inner.toString = () => {
    const temp = result;
    result = init;
    return temp;
  };
  return inner;
};
