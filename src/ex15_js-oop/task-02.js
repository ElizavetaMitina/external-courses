'use strict';
class appliance{
    constructor(applianceName, power, turnOn){
        this.applianceName = applianceName;
        this.power = power;
        this.turnOn = !!turnOn;
    }
    get name(){
        return this.applianceName;
    }
    set changePower(newValue){
        if (newValue > 0){
            this.power = newValue;
        }
    }
    set changeTurnOn(newValue){
        this.turnOn = !!newValue;
    }
}
let lamp = new appliance('lamp', 40, false);
lamp.changeTurnOn = true;
let toaster = new appliance('toaster', 70, false);
let tv = new appliance('tv', 120, false);
let room = [lamp, toaster, tv];
room.countPower = function () {
    let power = 0;
    room.forEach(function (item) {
        if (item.turnOn === true){
            power += item.power;
        }
    });
    return power;
};
console.log(room.countPower());
room.search = function (name) {
    return room.some(function (item) {
        return item.name === name;
    });
};
console.log(room.search('lamp'));