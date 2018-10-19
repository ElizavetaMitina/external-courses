'use strict';
let some = function (arr, callback) {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])){
            result = true;
            break
        }
    }
    return result
};
console.log(some([-1,1,2,3], function (item) {
    return item >= 0;
}));