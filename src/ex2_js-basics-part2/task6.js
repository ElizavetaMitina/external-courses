function composite(number) {
    var composition = false;
    for (i = 2; i < number; i++){
        if (number % i === 0){
            composition = true;
        }
    }
    if (number > 1000){
        console.log('Введены неверные данные')
    } else if (composition){
        console.log(number + ' - составное число')
    }else {
        console.log(number + ' - простое число')
    }
}
module.exports = composite;