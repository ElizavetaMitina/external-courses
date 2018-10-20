'use strict';
function upper(str) {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return(arr.join(''));
}
module.exports = upper();