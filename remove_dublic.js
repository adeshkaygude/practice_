const numbers = [1, 2, 3, 2, 4, 1, 5];

function remove_dublicate(numbers) {
  let original = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        original.push(numbers[i]);
      }
    }
  }

  return original;
}

console.log(remove_dublicate(numbers));
