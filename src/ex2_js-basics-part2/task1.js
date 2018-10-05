function type (x){
    var y;
    if (typeof x === "number" || typeof x === "string"){
        y = typeof x;
    } else {
        y = undefined;
    }
    return y;
}
module.exports = type;