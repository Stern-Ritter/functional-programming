const sum = (init = 0) => {
  let result = init;
  function inner(num: number) {
    result += num;
    return inner;
  }
  inner.valueOf = () => {
    const temp = result;
    result = init;
    return temp;
  };
  inner.toString = () => {
    const temp = result;
    result = init;
    return temp;
  };
  return inner;
};

export default sum;
