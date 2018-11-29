'use strict';
let appliance = {
    applianceName: 'appliance',
    power: 0,
    turnOn: false,
    set name(newValue){
        if(newValue){
            this.applianceName = newValue;
        }
    },
    get name(){
        return this.applianceName;
    },
    set changePower(newValue){
        if (newValue > 0){
            this.power = newValue;
        }
    },
    set changeTurnOn(newValue){
        this.turnOn = !!newValue;
    }
};
let lamp = Object.create(appliance);
lamp.name = 'lamp';
lamp.changePower = 20;
lamp.changeTurnOn = true;
let toaster = Object.create(appliance);
toaster.name = 'toaster';
toaster.changePower = 45;
let tv = Object.create(appliance);
tv.name = 'tv';
tv.changePower = 110;
tv.changeTurnOn = true;
let room = {
    appliances: [lamp, toaster, tv],
    countPower: function () {
        let power = 0;
        room.appliances.forEach(function (item) {
            if (item.turnOn === true) {
                power += item.power;
            }
        });
        return power;
    },
    search: function (name) {
        return room.appliances.some(function (item) {
            return item.name === name;
        });
    },
};
console.log(room.countPower());
console.log(room.search('lamp'));