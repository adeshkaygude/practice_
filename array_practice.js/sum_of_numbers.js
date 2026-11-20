let numbers = [10, 20, 30, 40, 50];

const sum = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

console.log(sum(numbers));
