function currying(fn) {
  const acc = [];
  const func = (...args) => {
    acc.push(...args);
    if(fn.length === acc.length) {
      const res = fn(...acc);
      acc.length = 0;
      return res;
    } else {
      return func;
    }
  }
  return func;
}
