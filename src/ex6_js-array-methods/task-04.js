'use strict';
let every = function (arr, callback) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callback(arr[i]))
    }
    return (resultArr.indexOf(false) === -1)
};
console.log(every([-1,1,2,3], function (item) {
    return item >= 0;
}));