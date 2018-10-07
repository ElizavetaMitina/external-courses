'use strict';
function maxValue(array) {
    var max = array[0];
    var i;
    for (i = 0; i < array.length; i++){
        if (max < array[i]){
            max = array[i]
        }
    }
    return(max)
}
module.exports = maxValue;