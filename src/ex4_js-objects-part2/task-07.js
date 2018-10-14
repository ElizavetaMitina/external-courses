'use strict';
function strLength(str, num) {
    if (str.length > num){
        let str1 = str.slice(0, num);
        str1 += '…';
        return str1
    }
    return str
}
module.exports = strLength();