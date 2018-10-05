function reCount(array){
    var message = '';
for (i = 0; i < array.length; i++){
    message = message + array[i] + ' ';
}
    console.log(message + 'Число элементов: ' + array.length);
}
module.exports = reCount;