'use strict';
function composite(number) {
    var composition = false;
    var i;
    for (i = 2; i < number; i++){
        if (number % i === 0){
            composition = true;
        }
    }
    if (number > 1000){
        return ('Данные неверны')
    } else if (composition){
        return ('Число ' + number + ' - составное число')
    }else if (composition === false){
        return ('Число ' + number + ' - простое число')
    }
}
module.exports = composite;