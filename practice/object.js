let students = [
  { name: "Adesh", marks: 75 },
  { name: "Rahul", marks: 85 },
  { name: "Rohit", marks: 60 },
  { name: "Amit", marks: 90 },
];

function add(students) {
  return students.map((el) => {
    return {
      ...el,
      marks: el.marks + 5,
    };
  });
}

let updatedStudents = add(students);

console.log(updatedStudents);
