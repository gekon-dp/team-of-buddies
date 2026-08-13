// // Задание 1
// function multiply(number1, number2 = 0) {
//   let sum = number1 + number2;
//   return sum;
// }

// let result = multiply(36, 52);
// let result2 = multiply(94);
// console.log(result);
// console.log(result2);

// // Задание 2
// const numbers = [2, 30, 602, 3.5];
// function calculateSum(arrayIndex) {
//   let sum = 0;
//   for (i = 0; i < arrayIndex.length; i++) {
//     sum += arrayIndex[i];
//   }
//   return sum;
// }

// let result = calculateSum(numbers);
// console.log(result);

// Задание 3
const displayStudentInfo = (studentName) => {
  const students = [
    {
      name: "Victoriia",
      age: 32,
      kurs: "Web",
    },
    {
      name: "Kostiantyn",
      age: 34,
      kurs: "Web",
    },
    {
      name: "Anastasiia",
      age: 29,
      kurs: "Web",
    },
  ];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentName) {
      return `${students[i].name} - ${students[i].age} years old | ${students[i].kurs}`;
    }
  }
  return "no students with this name";
};
console.log(displayStudentInfo("Victoriia"));
