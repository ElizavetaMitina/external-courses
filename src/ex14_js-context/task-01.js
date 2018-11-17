'use strict';
let Calculator = {
    result: 0,
    getResult: function (){
        return this.result
    },
    reset: function () {
        this.result = 0;
        return this
    },
    setState: function(num){
        if (num) {
            this.result = num
        }
        return this
    },
    add: function (num) {
        if (num !== undefined) {
            Calculator.result += num
        }
        return this
    },
    subtract: function (num) {
        if (num !== undefined) {
            Calculator.result -= num
        }
        return this
    },
    divide: function (num) {
        if (num !== undefined) {
            Calculator.result /= num
        }
        return this
    },
    multiply: function (num) {
        if (num !== undefined) {
            Calculator.result *= num
        }
        return this
    },
    fetchData: function (callback) {
        callback.call(this, 500)
    }
};
module.exports = Calculator;
// Calculator.fetchData(function (num) {
//     this.setState(num)
// });
// console.log(Calculator.getResult());