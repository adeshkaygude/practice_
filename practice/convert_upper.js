const names = ["adesh", "rahul", "priya", "amit"];

function uppercase(names) {
  return names.map((el) => el.toUpperCase());
}
console.log(uppercase(names));

// Expected Output:
// ["ADESH", "RAHUL", "PRIYA", "AMIT"]
