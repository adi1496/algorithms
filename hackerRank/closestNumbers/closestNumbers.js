function closestNumbers(array) {
    let max = array[0];
    array.forEach(el => {
        if(max < Math.abs(el)) max = Math.abs(el);
    });
    
    const rangeArr = [];
    for(let i = 0; i <= max; i++){
        rangeArr.push([0, 0]);
    }
    
    array.forEach(el => {
        if(el < 0){
            rangeArr[Math.abs(el)][0]++;
        }else {
            rangeArr[el][1]++;
        }
    });
    
    // console.log(rangeArr[1][0]);
    const arrNegative = [], arrPositive = [];
    for(let i = rangeArr.length - 1; i >= 0; i--){
        if(rangeArr[i][0] > 0){
            arrNegative.push(-i);
        }
    }
    
    rangeArr.forEach((el, index) => {
        if(el[1] > 0) arrPositive.push(index);
    });
    
    array = [...arrNegative, ...arrPositive];
    
    let smallestAbsDifference = Math.abs(array[0] - array[1]);
    array.forEach((el,index) => {
        if(index < array.length - 1){
        const absDiff = Math.abs(el - array[index+1]);
        if(smallestAbsDifference > absDiff) smallestAbsDifference = absDiff;
        }
    });
    
    const responseArray = [];
    array.forEach((el,index) => {
        if(index < array.length - 1){
        const absDiff = Math.abs(el - array[index+1]);
        if(smallestAbsDifference === absDiff) responseArray.push(el, array[index+1]);
        }
    });
    
    return responseArray;

}

const result = closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]);

console.log(result);