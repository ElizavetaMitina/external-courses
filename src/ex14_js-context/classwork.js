// function Shape(){
// }
// Shape.prototype.getArea = function () {
//     console.log('Nope!')
// };
// function Square(height) {
// }
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.getArea = function () {
//     return (this.height^2)
// };
// function Triangle(height, width){
// }
// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.getArea = function () {
//     return ((this.height*this.width)/2)
// };
// console.log(Shape);
// console.log(Shape.prototype);
class Shape {
    getArea () {
        return('Nope!')
    }
}
class Square extends Shape{
    getArea (height){
        return (height*height)
    }
}
class Triangle extends Shape{
    getArea (height, width){
        return ((height*width)/2)
    }
}
let mySquare = new Square;
console.log(mySquare.getArea(10));
let myTriangle = new Triangle;
console.log(myTriangle.getArea(10, 5));