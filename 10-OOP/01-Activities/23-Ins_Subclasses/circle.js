const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius) {
    const area = radius * Math.PI ** 2;
    const perimeter = 2 * Math.PI * radius;
    super(area, perimeter);
    this.circumference = this.perimeter;
  }
}

const circle = new Circle(3);
circle.printInfo();
