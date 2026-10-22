const numbers = [5, 3, 4, 3, 5, 6, 4];

function findFirst(numbers) {
  let repeat = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (repeat[num]) return num;

    repeat[num] = true;
  }

  return null;
}
console.log(findFirst(numbers));
