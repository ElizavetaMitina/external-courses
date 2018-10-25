'use strict';
let filter = function (arr, callback) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
};
module.exports = filter;