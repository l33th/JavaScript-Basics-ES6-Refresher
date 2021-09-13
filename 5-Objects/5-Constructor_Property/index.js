// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw ran');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw function ran');
    }
}
const another = new Circle(1);

// let x = {};
// let x = new Object();
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3 ...