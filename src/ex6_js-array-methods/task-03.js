'use strict';
let every = function (arr, callback) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callback(arr[i],i,arr))
    }
    return (resultArr.indexOf(false) === -1)
};
module.exports = every;