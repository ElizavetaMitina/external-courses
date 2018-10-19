'use strict';
    let filter = function (arr, callback) {
        let resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                resultArr.push(arr[i])
            }
        }
        return resultArr
    };
console.log(filter([1,2,3,4,5], function (item) {
    return item <= 3
}));