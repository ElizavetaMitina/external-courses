'use strict';
function reverse(str) {
    let arr = str.split('');
    arr.reverse();
    return (arr.join(''))
}
module.exports = reverse();