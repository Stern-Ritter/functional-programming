class Parallel<T> {
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  async jobs(...funcs: (() => Promise<T>)[]): Promise<T[]> {
    const tasks = funcs.slice();
    const completedTasks: Promise<T>[] = [];
    const results: T[] = [];

    for (let i = 0; i < this.count; i+=1) {
      this.setTask(tasks, completedTasks, results);
    }
    await Promise.all(completedTasks);
    return results;
  }

  setTask(tasks: (() => Promise<T>)[], completedTasks: Promise<T>[], results: T[]): void {
    const currentTask = tasks.shift();
    if (currentTask !== undefined) {
      const completedTask = currentTask();
      completedTasks.push(completedTask);
      completedTask.then((res) => {
        console.log(tasks.length, completedTasks.length, res);
        if (tasks.length > 0) this.setTask(tasks, completedTasks, results);
        results.push(res);
      });
    }
  }
}

const runner = new Parallel(2);

runner.jobs(
  () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
  () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
  () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
  () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
  () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
)
.then((res) => console.log(res)); // [1, 3, 2,  5, 4];
