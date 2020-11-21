const dom = {
    res: document.getElementById('res'),
    btn0: document.getElementById('btn0'),
    btn1: document.getElementById('btn1'),
    btnClear: document.getElementById('btnClr'),
    btnEqual: document.getElementById('btnEql'),
    btnSum: document.getElementById('btnSum'),
    btnSub: document.getElementById('btnSub'),
    btnMul: document.getElementById('btnMul'),
    btnDiv: document.getElementById('btnDiv')
}

let resState = '';
function setResState(value) {
    if(value === 'clear'){
        resState = resState.split('');
        resState.pop();
        resState = resState.join('');
    }else {
        resState += value;
    }
    dom.res.innerHTML = resState;
    console.log(resState);
}

const calc = (a, b, operator) => {
    a = parseInt(a, 2);
    b = parseInt(b, 2);
    return eval(`${a}${operator}${b}`).toString(2);
}

dom.btn0.addEventListener('click', e => {
    e.preventDefault();
    setResState(e.target.textContent);
});

dom.btn1.addEventListener('click', e => {
    e.preventDefault();
    setResState(e.target.textContent);
});

dom.btnSum.addEventListener('click', e => {
    e.preventDefault();
    setResState(e.target.textContent);
});

dom.btnSub.addEventListener('click', e => {
    e.preventDefault();
    setResState(e.target.textContent);
});

dom.btnMul.addEventListener('click', e => {
    e.preventDefault();
    setResState(e.target.textContent);
});

dom.btnDiv.addEventListener('click', e => {
    e.preventDefault();
    setResState(e.target.textContent);
});

dom.btnClear.addEventListener('click', e => {
    e.preventDefault();
    setResState('clear');
});

dom.btnEqual.addEventListener('click', e => {
    e.preventDefault();
    const regex = /\*|\+|\-|\//g;
    const operator = resState.match(regex)[0];
    const numbers = resState.split(`${operator}`);
    const result = calc(numbers[0], numbers[1], operator);
    setResState(result);
});