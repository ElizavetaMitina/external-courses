'use strict';
let map = function (arr, callback) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++){
        resultArr.push(callback(arr[i]))
    }
};
console.log(['HTML', 'CSS', 'JavaScript'].map(function(name) {
    return name.length;
}));