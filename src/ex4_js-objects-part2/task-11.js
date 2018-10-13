'use strict';
function numOfLetters(str) {
    const count = str.length;
    let result = 0;
    for(let i = 0; i < count; i++){
        if(str.charAt(i)){
            result++;
        }
    }
    return result;

}
module.exports = numOfLetters();