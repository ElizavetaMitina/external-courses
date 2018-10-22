'use strict';
function isProperty(prop, obj) {
    if (prop in obj.__proto__){
        return 1
    }
        return undefined
}
module.exports = isProperty();