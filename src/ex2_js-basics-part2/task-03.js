'use strict';
function parity(array){
    var results = [0,0,0];
    var i;
    for (i = 0; i < array.length; i++){
        if (array[i] === 0){
            results[2]++;
        }else if (array[i] % 2 === 0 && array[i] !== null){
            results[0]++;
        }else if (array[i] % 2 !== 0){
            results[1]++;
        }
    }
    for (i = 0; i < results.length; i++){
        if (i === 0){
            console.log('четных : ' + results[i] + '; ')
        }else if (i === 1){
            console.log('нечетных : ' + results[i] + '; ')
        }else if (i === 2 && results[i] !== 0){
            console.log('нуль : ' + results[i])
        }
    }
    return results;
}
console.log(parity([1,2,null]));
module.exports = parity;