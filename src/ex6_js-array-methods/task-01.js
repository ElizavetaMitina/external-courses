'use strict';
let slice = function (arr, begin, end) {
    let resultArr = [];
    let end1 = end;
    let begin1 = begin;
    if (begin === undefined){
        begin1 = 0
    }
    if (end === undefined){
        end1 = arr.length
    }
    if (begin1 < 0 && end1 < 0){
        for (let i = arr.length + begin1; i < arr.length + end1; i++){
            resultArr.push(arr[i]);
        }
    }else {for (let i = begin1; i < end1; i++){
        resultArr.push(arr[i]);
    }}
    return resultArr
};
module.exports = slice;
