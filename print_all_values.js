const student = {
  name: "Adesh",
  age: 21,
  city: "Pune",
  course: "MERN Stack",
  marks: 85,
};

function printvalue(student) {
  for (let i in student) {
    console.log(student[i]);
  }
}

printvalue(student);
