// Task 1
// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

const multiplyNumbers = (array) => {
  let multiplyResult = 1;
  for (let key in array) {
    multiplyResult *= array[key];
  }
  return multiplyResult;
};

const numbers = [10, 5, 12, 2];
console.log(multiplyNumbers(numbers));

// Task 2
// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

const numbers = [1000, 50, 120, 200];

let sum = 0;
let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(sum);

// Function
const sumNumbers = (array) => {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
};

console.log(sumNumbers(numbers));
