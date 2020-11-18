// function calcMoney(curencyUnit, curencyValue, change, moneyAvaible) {
//     console.log(change / curencyValue);
//     var moneyNum = change / curencyValue;
//     moneyNum = parseInt(moneyNum.toString().split('.')[0]);
//     while((moneyNum * curencyValue) > moneyAvaible) {
//       moneyNum--;
//     }
//     let moneyTaken = moneyNum * curencyValue;
//     console.log(moneyTaken);
//     change = change - moneyTaken;
//     console.log(change)
//     return {
//       arrCurency: [curencyUnit, moneyTaken],
//       change
//     }
//   }

function caclMoney(curencyUnit, curencyValue, changeLeft, cid, result) {
    if(changeLeft >= curencyValue) {
        let moneyNum
        // if(changeLeft > 1) {
            moneyNum = parseInt((changeLeft / curencyValue).toString().split('.')[0]);
        // }else {
        //     moneyNum = changeLeft / curencyValue;
        //     console.log(moneyNum);
        // }
        
        while((moneyNum * curencyValue) > cid[1]) {
            moneyNum--;
        }
        // console.log(moneyNum);
        let moneyTaken = moneyNum * curencyValue;
        // moneyTaken = moneyTaken.toFixed(2);
        // console.log(moneyTaken);
        cid[1] = cid[1] - moneyTaken;

        // console.log(moneyTaken);
        result.change.push([curencyUnit, moneyTaken]);
        // console.log(moneyTaken);
        result.changeLeft = parseFloat((changeLeft - moneyTaken).toFixed(2));
        // console.log(result.changeLeft);
        // if(result.changeLeft < 0.01) result.changeLeft = 0.01;
        // if(result.changeLeft < 0.01) {
        //     result.change[result.change.length-1][1] += 0.01;
        //     result.changeLeft = 0;
        // }
    }
}

function checkCashRegister(price, cash, cid) {
    let result = {
        status: '',
        change: [],
        changeLeft: cash - price
    };

    console.log(result.changeLeft);

    for(let i = cid.length - 1; i >= 0; i--) {
        if(cid[i][0] === 'ONE HUNDRED') {
            caclMoney('ONE HUNDRED', 100, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'TWENTY') {
            caclMoney('TWENTY', 20, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'TEN') {
            caclMoney('TEN', 10, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'FIVE') {
            caclMoney('FIVE', 5, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'ONE') {
            caclMoney('ONE', 1, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'QUARTER') {
            caclMoney('QUARTER', 0.25, result.changeLeft, cid[i], result);
        }
        else if(cid[i][0] === 'DIME') {
            caclMoney('DIME', 0.1, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'NICKEL') {
            caclMoney('NICKEL', 0.05, result.changeLeft, cid[i], result);
        }else if(cid[i][0] === 'PENNY') {
            caclMoney('PENNY', 0.01, result.changeLeft, cid[i], result);
        }
    }

    let count = 0;
    cid.forEach( el => {
        if(el[1] !== 0) count++;
    });

    console.log(cid);
    console.log(result);
    if(result.changeLeft === 0) {
        delete result.changeLeft;
        if(count === 0) {
            result.status = 'CLOSED';
            let arr = [];
            for(let i = result.change.length - 1; i >= 0; i--) {
                arr.push(result.change[i]);
            }
            arr.push(['ONE', 0]);
            arr.push(['FIVE', 0]);
            arr.push(['TEN', 0]);
            arr.push(['TWENTY', 0]);
            arr.push(['ONE HUNDRED', 0]);
            result.change = arr;
        }
        else {
            result.status = 'OPEN';
        }
    }else {
        result.status = 'INSUFFICIENT_FUNDS';
        result.change = [];
        delete result.changeLeft;
    }
    
    console.log(result);
    return result;
}
  
//   function checkCashRegister(price, cash, cid) {
//     let result = {
//       change: [],
//       changeLeft: cash - price
//     };
//     for(let i = cid.length - 1; i >= 0; i--) {
//       var resultCalc;
//       if(cid[i][0] === 'ONE HUNDRED') {
//         if(result.changeLeft > 100) {
//           resultCalc = calcMoney('ONE HUNDRED', 100, result.changeLeft, cid[i][1]);
//           result.change.push(resultCalc.arrCurency);
//           result.changeLeft = resultCalc.change;
//           console.log(result)
//         }
//       }else if(cid[i][0] === 'TWENTY') {
//         if(result.changeLeft > 20) {
//           resultCalc = calcMoney('TWENTY', 20, result.changeLeft, cid[i][1]);
//           result.change.push(resultCalc.arrCurency);
//           result.changeLeft = resultCalc.change;
//           console.log(result)
//         }
//       }else if(cid[i][0] === 'TEN'){
//         if(result.changeLeft > 10) {
//           resultCalc = calcMoney('TEN', 10, result.changeLeft, cid[i][1]);
//           result.change.push(resultCalc.arrCurency);
//           result.changeLeft = resultCalc.change;
//           console.log(result);
//         }
//       }else if(cid[i][0] === 'FIVE'){
//         if(result.changeLeft > 5) {
//           resultCalc = calcMoney('TEN', 5, result.changeLeft, cid[i][1]);
//           console.log(result);
//         }
//       }
//     }
//     return true;
//   }

//   checkCashRegister(19.5, 354.91, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])