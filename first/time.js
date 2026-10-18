count = 10;
const time = setInterval(() => {
  console.log(count);
  count--;
}, 1000);

setTimeout(() => {
  clearInterval(time);

  console.log("Time over!");
}, 10150);
