'use strict';
class Sweet{
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
let candyCane = new Sweet('candyCane', 'rose', 10);
let mintCandy = new Sweet('mintCandy', 'grey', 13);
let gum = new Sweet('gum', 'violet', 7);
class Gift{
    constructor(sweets){
        this.sweets = sweets
    }
    getWeight(){
        let weight = 0;
        this.sweets.forEach(function (item) {
            weight += item.weight;
        });
        return weight;
    }
    sorting(){
        this.sweets.sort(function (a,b) {
            return a.weight - b.weight;
        });
        return this.sweets
    }
    search(name){
        return this.sweets.some(function (item) {
            return item.name === name;
        });
    };
}
let myGift = new Gift([candyCane, mintCandy, gum]);
console.log(myGift.getWeight());
console.log(myGift.sorting());
console.log(myGift.search('gum'));