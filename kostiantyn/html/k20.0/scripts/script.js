// Задача 1
// Создайте класс Shape, у которого есть метод draw().
// Создайте два наследника класса Shape: Rectangle и Circle.
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
// Создайте массив, содержащий экземпляры классов Rectangle и Circle.
// Используйте цикл для вызова метода draw() для каждого элемента массива.

class Shape {
  draw() {
    console.log("Любая фигура");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Прямоугольник");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Круг");
  }
}

const shapes = [new Rectangle(), new Circle(), new Rectangle()];

// 2. Используем цикл для вызова метода draw() для каждого элемента массива
shapes.forEach((shape) => {
  shape.draw();
});
