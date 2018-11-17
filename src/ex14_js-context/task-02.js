'use strict';
function Hangman(input) {
    this.word = input.toLowerCase();
    this.result = [];
    this.errors = 6;
    this.errorSymbols = [];
    this.message = '';
    for (let i = 0; i < this.word.length; i++){
        this.result.push('_')
    }
    this.guess = function (letter) {
        let index = this.word.indexOf(letter);
        if(~index){ //'~' читается как «не минус один», а "if ~str.indexOf" читается как "если найдено"
            this.result = this.word.split('').map(function (item,i){
                if(item === letter){
                    return letter
                }
                return this.result[i]
            }, this);
            this.message = this.result.join('');
            if (this.result.indexOf('_') === -1){
                this.message = this.message + ' | You won!'
            }
        } else {
            this.errors--;
            this.errorSymbols.push(letter);
            this.message = 'wrong letter, errors left ' + this.errors + ' | ' + this.errorSymbols
        }
        console.log(this.message);
        return this
    };
    this.getGuessedString = function () {
        console.log(this.result.join(''));
        return this
    };
    this.getErrorsLeft = function () {
        console.log(this.errors);
        return this
    };
    this.getWrongSymbols = function () {
        console.log(this.errorSymbols);
        return this
    };
    this.startAgain = function (newWord) {
        this.word = newWord.toLowerCase();
        this.result = [];
        this.errors = 6;
        this.errorSymbols = [];
        this.message = '';
        for (let i = 0; i < this.word.length; i++){
            this.result.push('_')
        }
    }
}
module.exports = new Hangman;