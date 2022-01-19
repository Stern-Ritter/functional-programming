export default function spiral<T>(arr: T[][]): T[] {
  const res = [];
  const maxLength = arr.length * arr[0].length;
  let x = 0;
  let y = 0;

  function checkLength(): boolean {
    return res.length === maxLength;
  }

  while (res.length !== maxLength) {
    for (let i = x; i < arr[y].length - x; i += 1) {
      if (checkLength()) break;
      res.push(arr[y][i]);
    }
    for (let i = y + 1; i < arr.length - 1 - y; i += 1) {
      if (checkLength()) break;
      res.push(arr[i][arr[y].length - 1 - x]);
    }
    for (let i = arr[arr.length - 1 - y].length - 1 - x; i >= x; i -= 1) {
      if (checkLength()) break;
      res.push(arr[arr.length - 1 - y][i]);
    }
    for (let i = arr.length - 2 - y; i > y; i -= 1) {
      if (checkLength()) break;
      res.push(arr[i][x]);
    }
    x += 1;
    y += 1;
  }

  return res;
}
