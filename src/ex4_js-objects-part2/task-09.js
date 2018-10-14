'use strict';
function subStrPosition (str, subStr, num){
    let arr1 = str.split(' ', num+1);
    let arr2 = str.split(' ');
    arr2 = arr2.slice(num+1);
    arr1.push(subStr);
    return (arr1.join(' ') + ' ' + arr2.join(' '))
}
module.exports = subStrPosition();