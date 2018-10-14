'use strict';
function cloneDeep(object) {
    if (typeof object !== "object" || Array.isArray(object)){
        return object;
    }
    let copy = {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            copy[key] = object[key];
            if (typeof object[key] === 'object') {
                copy[key] = cloneDeep(object[key])
            }
        }
    }
    return copy
}
module.exports = cloneDeep;