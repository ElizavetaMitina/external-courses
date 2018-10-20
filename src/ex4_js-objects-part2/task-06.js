'use strict';
function upperWord(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++){
        let wordArr = arr[i].split('');
        wordArr[0] = wordArr[0].toUpperCase();
        arr[i] = wordArr.join('')
    }
    return (arr.join(' '))
}
module.exports = upperWord();