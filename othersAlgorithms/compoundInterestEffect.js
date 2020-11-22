const compoundInterest = (initialValue, interestRate, timeYears) => {
    if(timeYears === 0) {
        return 0;
    }else if(timeYears >= 1) {
        // let finalValue = initialValue;
        for(let i = 1; i <= timeYears; i++) {
            initialValue += initialValue * interestRate;
        }

        return initialValue;
    }
}

const result = compoundInterest(1000000, 0.035, 1);

console.log(result);