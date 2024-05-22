const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  let str = [...input[0]];
  str.forEach((value, index) => {
    if (value === value.toUpperCase()) {
      str[index] = value.toLowerCase();
    } else {
      str[index] = value.toUpperCase();
    }
  });
  console.log(str.join(""));
});
