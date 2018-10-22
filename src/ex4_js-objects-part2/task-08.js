'use strict';
function lowerCamelCase(str) {
    let arr = str.split(' ');
    let wordArr = arr[0].split('');
    wordArr[0] = wordArr[0].toLowerCase();
    arr[0] = wordArr.join('');
    for (let i = 1; i < arr.length; i++){
            let wordArr = arr[i].split('');
            wordArr[0] = wordArr[0].toUpperCase();
            arr[i] = wordArr.join('')
    }
    return (arr.join(''))
}
module.exports = lowerCamelCase();