'use strict';
let some = function (arr, callback) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i],i,arr)){
            result = true;
            break
        }
    }
    return result
};
module.exports = some;