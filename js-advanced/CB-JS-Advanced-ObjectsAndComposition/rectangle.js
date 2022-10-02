function rectangle(width, height, color) {
    class Rectangle {
        constructor(width, height, color) {
            this.width = Number(width);
            this.height = Number(height);
            this.color = color.substring(0, 1).toUpperCase() + color.substring(1);
        }

        calcArea() {
            return this.width * this.height;
        }
    }

    return new Rectangle(width, height, color)
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
