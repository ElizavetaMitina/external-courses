'use strict';
function logAllKeyValuePairs(object){
    var key;
        for (key in object) {
            if (object.hasOwnProperty(key)) {
                console.log(key + ': ' + object[key])
            }
        }
}
module.exports = logAllKeyValuePairs;