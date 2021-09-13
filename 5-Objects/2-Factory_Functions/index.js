// Factory Functions
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('this is a draw method');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);

circle2.draw();