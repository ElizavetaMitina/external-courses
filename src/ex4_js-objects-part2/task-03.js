'use strict';
function spaceDelete(str) {
    let arr = str.split('');
    for (let i = 0; i < str.length; i++){
        if (arr[0] === ' '){
            arr.shift();
        }
        if (arr[arr.length - 1] === ' '){
            arr.pop();
        }
    }
    return (arr.join(''));
}
module.exports = spaceDelete();