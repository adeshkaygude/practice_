const numbers = [1, 2, 3, 4, 5];

function multiplaction(numbers) {
  let multi = numbers.map((el) => {
    return el * 2;
  });
  return multi;
}
console.log(multiplaction(numbers));
