'use strict';
const Appliance = function (name, power, turnOn) {
    this.name = name;
    this.power = power;
    this.turnOn = turnOn;
};
Appliance.prototype.setName = function(newValue){
    if(newValue){
        this.name = newValue;
    }
};
Appliance.prototype.getName = function(){
    return this.name
};
Appliance.prototype.changePower = function (newValue) {
    if (newValue > 0){
        this.power = newValue;
    }
};
Appliance.prototype.changeTurnOn = function (newValue) {
    this.turnOn = !!newValue;
};
let lamp = new Appliance('lamp', 20, true);
let toaster = new Appliance('toaster', 45, false);
let tv = new Appliance('tv');
tv.changePower = 110;
tv.changeTurnOn = true;
const Room = function(appliances){
    this.appliances = appliances;
};
Room.prototype.countPower = function () {
    let power = 0;
    this.appliances.forEach(function (item) {
        if (item.turnOn === true) {
            power += item.power;
        }
    });
    return power;
};
Room.prototype.search = function(name){
    return this.appliances.some(function (item) {
        return item.name === name;
    });
};
let myRoom = new Room([lamp, toaster, tv]);
console.log(myRoom.countPower());
console.log(myRoom.search('lamp'));