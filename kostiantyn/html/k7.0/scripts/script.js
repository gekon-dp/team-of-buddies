// // Задание 1
// const numbers = [3, 4, 1, 7, 9];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // Задание 2
// const numbers = [3, 4, 1, 7, 9, 20, 13, 6, 18];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 8 && numbers[i] < 20) {
//     console.log(numbers[i]);
//   }
// }

// // Задание 3
// const numbers = [30, 48, 14, 7, 9, 20, 13, 6, 18];
// let min = 100;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

// // Задание 4
// const numbers = [30, 48, 14, 7, 9, 20, 13, 6, 18];
// numbers[3] = 17;
// numbers[4] = 91;
// numbers[7] = 65;
// console.log(numbers);

// Задание 5
const words = ["Hello", "my", "name", "is", "Kostiantyn"];
let max = 0;
let min = 100;
for (i = 0; i < words.length; i++) {
  if (words[i].length > max) {
    max = words[i].length;
  } else if (words[i].length < min) {
    min = words[i].length;
  }
}
console.log(`Minimal - ${min}`);
console.log(`Maximal - ${max}`);
