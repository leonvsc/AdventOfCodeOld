let result = 0;
const fs = require("fs");
let text = fs.readFileSync("./input.txt", "utf-8").toString().split("\n");

for (let i = 1; i < text.length; i++) {
    let current = text[i];
    let previous = text[i - 1];
    if (current > previous) {
        result++;
    }
}

console.log(result);
