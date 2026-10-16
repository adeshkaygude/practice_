const numbers = [1, 2, 3, 5, 6];

function missing(numbers) {
  let n = numbers.length + 1;

  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return total - sum;
}

console.log(missing(numbers));
