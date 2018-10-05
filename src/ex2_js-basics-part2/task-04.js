'use strict';
function sameness(array) {
    var same = true;
    var i;
    var j;
    for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (array[i] !== array[j]){
                same = false;
            }
        }
    }
    return same
}
module.exports = sameness;