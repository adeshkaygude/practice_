let numbers = [10, 55, 80, 30, 65, 90, 20, 45];

function greater(numbers) {
  return numbers.filter((el) => el > 50);
}
console.log(greater(numbers));
