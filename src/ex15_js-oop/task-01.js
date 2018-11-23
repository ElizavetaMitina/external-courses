'use strict';
class sweet{
    constructor(candyName, wrapColor, weight){
        this.candyName = candyName;
        this.wrapColor = wrapColor;
        this.weight = weight;
    }
    get name(){
        return this.candyName;
    }
    set newWrapColor (newValue){
        if (newValue !== ''){
            this.wrapColor = newValue;
        }
    }
    set newWeight (newValue){
        if (newValue > 0){
            this.weight = newValue;
        }
    }
}
let candyCane = new sweet('candyCane', 'rose', 10);
let mintCandy = new sweet('mintCandy', 'grey', 13);
let gum = new sweet('gum', 'violet', 7);
let gift = [candyCane, mintCandy, gum];
gift.getWeight = function(){
    let weight = 0;
    gift.forEach(function (item) {
        weight += item.weight;
    });
    return weight;
};
console.log(gift.getWeight());
gift.sorting = function(){
    let sweets = [];
    gift.forEach(function (item) {
        sweets.push(item);
    });
    sweets.sort(function (a,b) {
        return a.weight - b.weight;
    });
    return sweets;
};
console.log(gift.sorting());
gift.search = function(name){
    return gift.some(function (item) {
        return item.name === name;
    });
};
console.log(gift.search('gum'));