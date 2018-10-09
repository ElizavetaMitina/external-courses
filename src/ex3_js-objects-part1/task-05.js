'use strict';
function clone(object) {
    var object2 = object;
    return (object2 === object);
}
module.exports = clone;