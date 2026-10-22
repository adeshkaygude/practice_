const numbers = [1, 2, 2, 3, 1, 4, 2, 3];

function frequency(numbers) {
  let freq = {};
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  return freq;
}

console.log(frequency(numbers));
