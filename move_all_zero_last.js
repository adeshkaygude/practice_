const numbers = [0, 1, 0, 3, 12, 0, 5];
function move_zero(numbers) {
  let arr = [];
  let arr2 = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      arr2.push(numbers[i]);
    } else {
      arr.push(numbers[i]);
    }
  }
  return arr.concat(arr2);
}

console.log(move_zero(numbers));
