const circle = {
    radius: 9,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
}

console.log(circle.area, circle.radius);