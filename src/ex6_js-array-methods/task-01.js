'use strict';
let slice = function (arr, begin, end) {
    let resultArr = [];
    for (let i = arr[begin]; i < arr[end]; i++){
        resultArr.push(i)
    }
    return resultArr
};
console.log(slice([1,2,3,4,5,6],1,3));