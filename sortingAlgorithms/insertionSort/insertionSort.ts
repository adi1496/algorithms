const fs = require('fs');

const insertionSort = (array, sortType) => {
    let startArray = 0;
    let isNotSorted = true;
    while(isNotSorted === true) {
        isNotSorted = false;
        for(let i = startArray; i < array.length; i++) {
            if(i !== 0) {
                if(array[i] < array[i-1]){
                    startArray = i;
                    isNotSorted = true;
                    const element = array[i];
                    for(let j = i - 1; j >= 0; j--){
                        if(element < array[j]){
                            array[j+1] = array[j];
                        }else if(element >= array[j]){
                            
                            array[j+1] = element;
                            break;
                        }
    
                        if(j=== 0 && element < array[j]){
                            array[j] = element;
                            break;
                        }
                    }
                    break;
                }
            }
        }

    }
    

    return array;
    
}

exports.insertionSortFile = (file) => {
    const readFile = fs.readFileSync(file, 'utf-8');
    return insertionSort(JSON.parse(readFile), "+");
};

// const a = insertionSortFile('./../utils/smallNumberList.json');

// console.log(a);
