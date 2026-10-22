const str = "I am learning JavaScript programming";

function largeWord(str) {
  let word = str.split(" ");

  let long = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > long.length) {
      long = word[i];
    }
  }
  return long;
}

console.log(largeWord(str));
