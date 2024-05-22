const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const count = Number(input[0]);
const result = [];
const tool = [25, 10, 5, 1];
for (let i = 1; i <= count; i++) {
  let check = Number(input[i]);
  const semiRes = [];
  for (let j = 0; j < 4; j++) {
    let now = 0;
    while (check >= tool[j]) {
      check -= tool[j];
      now++;
    }
    semiRes.push(now);
  }
  result.push(semiRes);
}
result.forEach((element) => {
  console.log(element.join(" "));
});
