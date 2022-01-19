type CurriedFunction2<T, R> = {
  (t1: T): (t2: T) => R;
  (t1: T, t2: T): R;
}

type CurriedFunction3<T, R> = {
  (t1: T): CurriedFunction2<T, R>;
  (t1: T, t2: T): (t3: T) => R;
  (t1: T, t2: T, t3: T): R;
}

type CurriedFunction4<T, R> = {
  (t1: T): CurriedFunction3<T, R>;
  (t1: T, t2: T): CurriedFunction2<T, R>;
  (t1: T, t2: T, t3: T): (t4: T) => R;
  (t1: T, t2: T, t3: T, t4: T): R;
}

type CurriedFunction5<T, R> = {
  (t1: T): CurriedFunction4<T, R>;
  (t1: T, t2: T): CurriedFunction3<T, R>;
  (t1: T, t2: T, t3: T): CurriedFunction2<T, R>;
  (t1: T, t2: T, t3: T, t4: T): (t5: T) => R;
  (t1: T, t2: T, t3: T, t4: T, t5: T): R;
}


function currying<T, R>(
  fn: (...args: [T, T, T, T, T]) => R
): CurriedFunction5<T, R> {
  return function inner(...args: T[]): any {
    if (fn.length !== args.length) {
      return inner.bind(null, ...args);
    }
    const [arg1, arg2, arg3, arg4, arg5] = args;
    return fn(arg1, arg2, arg3, arg4, arg5);
  };
}

