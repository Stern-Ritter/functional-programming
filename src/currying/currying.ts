interface CurriedFunction2<T, R> {
  (t1: T): (t2: T) => R;
  (t1: T, t2: T): R;
}

interface CurriedFunction3<T, R> {
  (t1: T): CurriedFunction2<T, R>;
  (t1: T, t2: T): (t3: T) => R;
  (t1: T, t2: T, t3: T): R;
}

interface CurriedFunction4<T, R> {
  (t1: T): CurriedFunction3<T, R>;
  (t1: T, t2: T): CurriedFunction2<T, R>;
  (t1: T, t2: T, t3: T): (t4: T) => R;
  (t1: T, t2: T, t3: T, t4: T): R;
}

interface CurriedFunction5<T, R> {
  (t1: T): CurriedFunction4<T, R>;
  (t1: T, t2: T): CurriedFunction3<T, R>;
  (t1: T, t2: T, t3: T): CurriedFunction2<T, R>;
  (t1: T, t2: T, t3: T, t4: T): (t5: T) => R;
  (t1: T, t2: T, t3: T, t4: T, t5: T): R;
}

function currying<T, R>(
  fn: (t1: T, t2: T, t3: T, t4: T, t5: T) => R
): CurriedFunction5<T, R> {
  return function inner(...args: T[]): any {
    if (fn.length !== args.length) {
      return inner.bind(null, ...args);
    }
    const [arg1, arg2, arg3, arg4, arg5] = args;
    return fn(arg1, arg2, arg3, arg4, arg5);
  };
}

const func = (a: number, b: number, c: number, d: number, e: number): number =>
  a + b + c + d + e;

const hof = currying(func);

console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35
