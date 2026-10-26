const students = [
  { id: 1, name: "Adesh", age: 21 },
  { id: 2, name: "Rahul", age: 22 },
  { id: 3, name: "Priya", age: 20 },
  { id: 4, name: "Amit", age: 23 },
];

function name(students) {
  return students.map((el) => el.name);
}
console.log(name(students));

// Expected Output:
// ["Adesh", "Rahul", "Priya", "Amit"]
