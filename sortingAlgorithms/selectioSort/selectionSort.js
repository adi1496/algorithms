/*
    1. selection sort is iterating the array and find the lowest number and put it in the begining of the array
    2. after is iterating from the next position of the lowest element that is now on the first position (so, from first position) and find the lowest element and puti it on the start position
    3. and so on...
*/
const fs = require('fs');
const selectionSort = (array, sortType) => {
    if (sortType !== '+' && sortType !== '-')
        return 'Insert + for ascending order and - for descending';
    let startPosition = 0;
    while (startPosition < array.length) {
        let min = array[startPosition];
        let indexMin = null;
        for (let i = startPosition; i < array.length; i++) {
            if (sortType === '+') {
                if (min > array[i]) {
                    min = array[i];
                    indexMin = i;
                }
            }
            else if (sortType === '-') {
                if (min < array[i]) {
                    min = array[i];
                    indexMin = i;
                }
            }
        }
        if (indexMin !== null) {
            const temp = array[startPosition];
            array[startPosition] = min;
            array[indexMin] = temp;
        }
        startPosition++;
    }
    return array;
};
exports.selectionSortFile = (file) => {
    const readFile = fs.readFileSync(file, 'utf-8');
    return selectionSort(JSON.parse(readFile), "+");
};
// const resposne = selectionSortFile('./numberList.json');
// console.log(resposne);
