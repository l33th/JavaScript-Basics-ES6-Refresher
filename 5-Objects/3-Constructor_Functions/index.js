// Factory Functions
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw function ran');
        }
    };
}

const myCircle = createCircle(1);
console.log(myCircle + '\nThe factory function ran.');
console.log('\n-----------------------\n');

// Constructor Function
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw function ran');
	}
}

// The 'new' keyword creates a new object, points "this" to that
// empty object, then returns "this" from the "Circle" function
const circle = new Circle(1);
console.log(circle + '\nthe circle is of type ' + '"' +typeof(circle) + '"' + '\nTHello, World!\n');