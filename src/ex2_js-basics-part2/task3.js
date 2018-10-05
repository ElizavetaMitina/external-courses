function parity(array){
    var zero = 0;
    var even = 0;
    var uneven = 0;
    var message = '';
    for (i = 0; i < array.length; i++){
        if (array[i] === 0){
            zero++;
        } else if (array[i] % 2 === 0){
            even++;
        }else {
            uneven++;
        }
    }
    if (even){
        message = message + ' четных: ' + even
    }
    if (uneven){
        message = message + ' нечетных: ' + uneven
    }
    if (zero){
        message = message + ' нуль: ' + zero
    }
    console.log(message)
}
module.exports = parity;