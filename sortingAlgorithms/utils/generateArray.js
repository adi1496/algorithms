const fs = require('fs');
const generateArray = (lowest, highest, length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (highest - lowest)) + lowest);
    }
    return array;
};
const generateArrayToFile = (lowest, highest, length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (highest - lowest)) + lowest);
    }
    fs.writeFileSync('./numberListHuge.json', JSON.stringify(array), 'utf-8');
    console.log('Done');
};
generateArrayToFile(0, 100000, 1000000);
