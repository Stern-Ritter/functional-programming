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

console.log(semverSort([ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]));
 // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
