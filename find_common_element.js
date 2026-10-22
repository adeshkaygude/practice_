const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function find_common(arr1, arr2) {
  let anser = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        anser.push(arr1[i]);
      }
    }
  }

  return anser;
}

console.log(find_common(arr1, arr2));
