function maxValue(array) {
    var max = array[0];
    for (i = 0; i < array.length; i++){
        if (max < array[i]){
            max = array[i]
        }
    }
    console.log(max)
}
module.exports = maxValue;