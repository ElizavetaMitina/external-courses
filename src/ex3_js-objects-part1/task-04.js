'use strict';
function setNonExistedProperty(prop, object) {
    var key;
    var result;
    var obj = object;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            result = (prop === key)
            if (!result) {
                obj[prop] = 'new'
            }
        }
    }
    return obj
}
module.exports = setNonExistedProperty;