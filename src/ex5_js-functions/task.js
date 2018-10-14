'use strict';
let Calculator = {
    result: 0,
    getResult: function (){
        return this.result
    },
    reset: function () {
        this.result = 0
    },
    add: function a(num) {
        if (num !== undefined) {
            Calculator.result += num
        }
        return a
    },
    subtract: function s(num) {
        if (num !== undefined) {
            Calculator.result -= num
        }
        return s
    },
    divide: function d(num) {
        if (num !== undefined) {
            Calculator.result /= num
        }
        return d
    },
    multiply: function m (num) {
        if (num !== undefined) {
            Calculator.result *= num
        }
        return m
    }
};
module.exports = Calculator;