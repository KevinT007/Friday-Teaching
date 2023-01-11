interface Shape {
  draw(): void;
}
class Sphere implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
  draw(): void {
    console.log(`Drawing a Sphere with radius ${this.radius}`);
  }
}

class Triangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    throw new Error("Method not implemented.");
  }
  getPerimeter(): number {
    throw new Error("Method not implemented.");
  }
  draw(): void {
    console.log(
      `Drawing a triangle with width ${this.width} and height ${this.height}`
    );
  }
}
function drawShapes(shape: Shape) {
  shape.draw();
}
let sphere = new Sphere(5);
let triangle = new Triangle(10, 20);

drawShapes(sphere); // Drawing a Circle with radius 5
drawShapes(triangle); // Drawing a Rectangle with width 10 and height 20
