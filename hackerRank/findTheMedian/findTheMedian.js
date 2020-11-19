const fs = require('fs');


const findTheMedian = () => {
    const fileInput = fs.readFileSync('./input.txt', 'utf-8');
    let arr = fileInput.split(' ');

    let max = arr[0];
    arr.forEach(el => {
        if(max < el) max = el;
    });
    const arrRange = [];
    for(let i = 0; i <= max; i++) {
        arrRange.push(0);
    }
    
    arr.forEach(el => arrRange[el]++);
    
    arr=[];
    arrRange.forEach((el, index) => {
        if(el > 0) {
            for(let i = 0; i < el; i++){
                arr.push(index);
            }
        }
    })
    
    console.log(arr.length);
    console.log(arr[arr.length - 1]);
    const median = arr[Math.floor(arr.length / 2)];
    console.log(arr[Math.floor(arr.length / 2) + 2]);
    
    return median;
}


const median = findTheMedian();

console.log(median);

//should be 4960