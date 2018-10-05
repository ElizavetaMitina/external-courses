function sameness(array) {
    var same = true;
    for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (array[i] !== array[j]){
                same = false;
            }
        }
    }
    console.log(same)
}
module.exports = sameness;