const student = {
  name: "Adesh",
  age: 21,
  city: "Pune",
  course: "MERN Stack",
};

function find_obj_keys(student) {
  let count = 0;
  for (i in student) {
    count++;
  }
  return count;
}

console.log(find_obj_keys(student));
