function semverSort(arr: string[]): string[] {
  return arr
    .map((el) => el.split('.').map((num) => Number(num)))
    .sort((first, second) => {
      for(let i = 0; i < Math.min(first.length, second.length); i += 1) {
        if(first[i] !== second[i]) return first[i] - second[i];
      }
      return first.length - second.length;
    })
    .map((el) => el.join('.'));
}
