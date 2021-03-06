const fs = require('fs');

const insertionSortTest = require('./../insertionSort/insertionSort');
const startTime = new Date();
const result = insertionSortTest.insertionSortFile('./../utils/numberList.json');
const endTime = new Date();
const resultTime = (endTime - startTime) / 1000;
console.log(`Operation took ${resultTime} seconds`);

fs.writeFileSync('./../utils/results/insertionSort.txt', `Operation took ${resultTime} seconds`, 'utf-8');
const resultsFile = fs.readFileSync('./../utils/resultArray.json', 'utf-8');

console.log(JSON.stringify(result) === resultsFile);