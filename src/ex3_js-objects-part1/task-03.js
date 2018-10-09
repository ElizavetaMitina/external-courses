'use strict';
function hasProperty(prop, object) {
    var key;
    var result = false;
    for (key in object){
        if (prop === key){
            result = true
        }
    }
    return result;
}
module.exports = hasProperty;