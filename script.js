function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  arr = arr.map(Number);

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second === -Infinity ? -Infinity : second;
}