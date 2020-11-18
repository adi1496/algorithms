const fs = require('fs');
function countingSort(arr) {
    let max = arr[0];
    arr.forEach(el => {
        if (max < el)
            max = el;
    });
    const arrRange = [];
    for (let i = 0; i <= max; i++) {
        arrRange.push(0);
    }
    arr.forEach(el => arrRange[el]++);
    arr = [];
    arrRange.forEach((el, index) => {
        if (el > 0) {
            for (let i = 0; i < el; i++) {
                arr.push(index);
            }
        }
    });
    return arr;
}
exports.countingSortFile = (file) => {
    const readFile = fs.readFileSync(file, 'utf-8');
    return countingSort(JSON.parse(readFile));
};
// const a = countingSortFile('./../utils/smallNumberList.json');
// console.log(a);
