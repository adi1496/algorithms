const fs = require('fs');

const countingSortTest = require('./../countingSort/countingSort');
const startTime = new Date();
const result = countingSortTest.countingSortFile('./../utils/numberList.json');
const endTime = new Date();
const resultTime = (endTime - startTime) / 1000;
console.log(`Operation took ${resultTime} seconds`);

fs.writeFileSync('./../utils/results/countingSort.txt', `Operation took ${resultTime} seconds`, 'utf-8');
const resultsFile = fs.readFileSync('./../utils/resultArray.json', 'utf-8');

console.log(JSON.stringify(result) === resultsFile);
console.log(result);
