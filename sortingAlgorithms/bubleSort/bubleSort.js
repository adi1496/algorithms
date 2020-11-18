const fs = require('fs');
const buble = (array, length) => {
    let swapsCount = 1;
    while (swapsCount > 0) {
        swapsCount = 0;
        for (let i = 0; i < length; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapsCount++;
            }
        }
        length--;
    }
    // if(swapsCount > 0) {
    //     buble(array, length-1);
    // }
    return array;
};
const bubleSort = (array, sortType) => {
    if (sortType !== '+' && sortType !== '-')
        return 'Insert + for ascending order and - for descending';
    return buble(array, array.length);
};
exports.bubleSortFile = (file) => {
    const readFile = fs.readFileSync(file, 'utf-8');
    return bubleSort(JSON.parse(readFile), "+");
};
// const response = bubleSortFile('./../utils/smallNumberList.json');
// console.log(response);
