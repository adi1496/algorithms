const fs = require('fs');

const selectionSortTest = require('./../selectioSort/selectionSort');
const startTime = new Date();
const result = selectionSortTest.selectionSortFile('./../utils/numberList.json');
const endTime = new Date();
const resultTime = (endTime - startTime) / 1000;
console.log(`Operation took ${resultTime} seconds`);

fs.writeFileSync('./../utils/resultArray.json', JSON.stringify(result), 'utf-8');
fs.writeFileSync('./../utils/results/selectionSort.txt', `Operation took ${resultTime} seconds`, 'utf-8');

console.log(result);
