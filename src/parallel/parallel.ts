class Parallel<T> {
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  runTask (tasks: (() => Promise<T>)[]) {
    const currentTask = tasks.shift();
    return currentTask !== undefined ? currentTask() : Promise.reject();
  }

  addResult (value: T, results: T[]) {
    results.push(value);
    return Promise.resolve();
  }

  async createThread(tasks: (() => Promise<T>)[], results: T[]) {
    return tasks.reduce((promise) => promise
      .then(() => this.runTask(tasks))
      .then((value) => this.addResult(value, results)),
    Promise.resolve());
  }

  async jobs(...funcs: (() => Promise<T>)[]): Promise<T[]> {
    const tasks = funcs.slice();
    const results: T[] = [];
    const threads = Array.from(Array(this.count), () => this.createThread(tasks, results));
    await Promise.allSettled(threads);
    return results;
  }
}
