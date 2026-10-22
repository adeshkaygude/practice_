let count = 0;

const time = setInterval(() => {
  const d = new Date();

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

  count++;

  if (count === 10) {
    clearInterval(time);
    console.log("Time over!");
  }
}, 1000);
