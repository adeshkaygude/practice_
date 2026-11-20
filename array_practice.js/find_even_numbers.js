let numbers = [10, 15, 20, 25, 30, 35, 40];

const even = (numbers) => {
  return numbers.filter((el) => el % 2 === 0);
};

console.log(even(numbers));
