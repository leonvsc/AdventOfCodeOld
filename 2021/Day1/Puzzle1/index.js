let measurements = [];
let result = 0;
const fs = require("fs");
let text = fs.readFileSync("./input.txt", "utf-8");
let textByLine = text.split("\n");

console.log(typeof text);

measurements.push(textByLine);

console.log(measurements[0]);

for (let i = 1; i < measurements.length; i++) {
    let current = measurements[i];
    let previous = measurements[i - 1];
    if (current > previous) {
        result++;
    }
}

console.log(result);
