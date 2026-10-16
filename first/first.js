const numbers = [1, 2, 3, 5, 6];

function findMissing(numbers) {
  let n = numbers.length + 1;
  let sum = (n * (n + 1)) / 2;
  let total = 0;
  for (i of numbers) {
    total += i;
  }
  return sum - total;
}

console.log(findMissing(numbers));
