function rot13(str) {
    str = str.split('');
    let newStr = '';
  
    str.forEach(el => {
      if(el.charCodeAt(0) > 64 && el.charCodeAt(0) < 91) {
        el = el.charCodeAt(0) + 13;
        if(el > 90) {
          el = 64 + el - 90;
        }
        newStr += String.fromCharCode(el);
      } else {
        newStr += el;
      }
    });

    console.log(newStr);
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");
  