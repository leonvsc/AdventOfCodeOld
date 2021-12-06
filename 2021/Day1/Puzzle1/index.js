let measurements = [];

const lineReader = require("line-reader");
lineReader.eachLine("./input.txt", (line, last) => {
    measurements.push(line);
    lineReader.on("close", function () {
        console.log(measurements);
    });
});

// let result = 0;

// for (let i = 1; i < measurements.length; i++) {
//     let current = measurements[i];
//     let previous = measurements[i - 1];
//     if (current > previous) {
//         result++;
//     }
// }

// console.log(result);
