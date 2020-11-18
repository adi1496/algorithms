const fs = require('fs');

const bubleSortTest = require('./../bubleSort/bubleSort');
const startTime = new Date();
const result = bubleSortTest.bubleSortFile('./../utils/numberList.json');
const endTime = new Date();
const resultTime = (endTime - startTime) / 1000;
console.log(`Operation took ${resultTime} seconds`);

fs.writeFileSync('./../utils/results/bubleSort.txt', `Operation took ${resultTime} seconds`, 'utf-8');

console.log(result);