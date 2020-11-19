const includesChar = (arr, char) => {
    let includes = false;
    arr.forEach(el => {
        if(el === char.toLowerCase()) includes = true;
    });
    
    return includes;
}

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    k = k % 26;
    s = s.split('');
    const newString = [];
    s.forEach(el => {
        if(includesChar(originalAlphabet, el) === false){
            newString.push(el);
        }else {
            let isUpperCase = false;
            if(el === el.toUpperCase()) {
                isUpperCase = true;
                el = el.toLowerCase();
            }
            let index = originalAlphabet.indexOf(el);
            let newIndex = index + k;
            if(newIndex > (originalAlphabet.length - 1)){
                newIndex = newIndex - (originalAlphabet.length - 1) - 1;
            }
            
            if(isUpperCase){
                newString.push(originalAlphabet[newIndex].toUpperCase());
            }else {
                newString.push(originalAlphabet[newIndex]);
            }
        }
    });
    
    return newString.join('');

}

const output = caesarCipher('DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.', 45);

console.log(output);

// WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr.