'use strict';
let map = function (arr, callback) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++){
        resultArr.push(callback(arr[i],i,arr))
    }
    return resultArr
};
module.exports = map;