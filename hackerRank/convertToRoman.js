    function convertToRoman(num) {
        num = num.toString();
        const roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
        const arab = [1, 5, 10, 50, 100, 500, 1000];
    
        function timesLetter(num, index) {
        let str = '';
        for(let i = 0; i < num; i++) {
            str += roman[index - 1];
        }
        return str;
        }
    
        function createRoman(num, index) {
        num = parseInt(num);
        if(num === 0) return '';
        if(num < arab[1] - 1){
            num = timesLetter(num, index);
            return num;
        }else if(num === arab[1] - 1){
            return roman[index - 1] + roman[index];
        }else if (num === arab[1]) {
            return roman [index];
        }else if (num > arab[1] && num < arab[1+1] - 1) {
            return roman[index] + timesLetter(num - arab[1], index);
        }else if (num = arab[1+1] - 1) {
            return roman[index - 1] + roman[index+1];
        }
        }
    
        let result;
        if(num.length === 1) {
        result = createRoman(num, 1);
        }else if(num.length === 2) {
        result = createRoman(num[0], 3) + createRoman(num[1], 1);
        }else if(num.length === 3) {
        result = createRoman(num[0], 5) + createRoman(num[1], 3) + createRoman(num[2], 1);
        }else if(num.length === 4) {
        result = timesLetter(parseInt(num[0]), 7) + createRoman(num[1], 5) + createRoman(num[2], 3) + createRoman(num[3], 1);
        }
    
        return result;
    }
    
    console.log(convertToRoman(3999));
    convertToRoman(2); //should return "II".
    convertToRoman(3);
    convertToRoman(4);
    convertToRoman(5);
    convertToRoman(9);
    convertToRoman(12);
    convertToRoman(16);
    convertToRoman(29);
    convertToRoman(44);
    convertToRoman(45);
    convertToRoman(68);
    convertToRoman(83);
    convertToRoman(97);
    convertToRoman(99);
    convertToRoman(400);
    convertToRoman(500);
    convertToRoman(501);
    convertToRoman(649);
    convertToRoman(798);
    convertToRoman(891);
    convertToRoman(1000);
    convertToRoman(1004);
    convertToRoman(1006);
    convertToRoman(1023);
    convertToRoman(2014);
    convertToRoman(3999);