
// Дан массив чисел и целевая сумма (target).
// Нужно найти ДВА числа в массиве, которые в сумме дают target, и вернуть их индексы.
// 35, 7, 86, 53, 23, 45, 67, 

const arr = [98, 24, 35, 7, 86, 53, 23, 45, 67, 2];
let target = 100;
console.log("Start");
let ifFound = false;
for (let i = 0; i < arr.length - 1; i++) {
    // console.log("i = " + i);
    for (let j = i + 1; j < arr.length; j++) {
        // console.log("j = " + j);
        if ((arr[i] + arr[j]) === target) {
            console.log(`${i + 1} -ый эл-т = ${arr[i]} ; ${j + 1}-ый эл-т = ${arr[j]} `)
            ifFound = true;
            break;
        }
    }
    if (ifFound) { break; }
}
console.log(ifFound);
console.log("End");


// Создайте функцию, которая принимает два числа в качестве параметров 
// и возвращает их сумму, для второго параметра определите значение по умолчанию. 
// Затем вызовите функцию и выведите результат в консоль.
console.log(".      N 1");
function sum(a = 0, b = 0) {
    return a + b;
};

console.log(sum(54, 65));
console.log(sum(8));
console.log(sum());
console.log(sum(3, 65));


// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив 
// и возвращает сумму всех его элементов, не используя методы массивов.
console.log(".      N 2");
function sumArray(list) {
    let sum = 0;
    for (let el of list) {
        sum = sum + el;
    }
    return sum;
};

console.log(sumArray([2, 3, 4, 5, 6]));
console.log(sumArray([9, 8, 7, 6]));
console.log(sumArray([11, 12, 13, 14, 15]));



// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, 
// которая принимает студента и выводит его информацию в консоль.
console.log(".      N 3");
const students = [
    {
        name: "Alice",
        age: 18,
        kurs: "mathe"
    },
    {
        name: "Max",
        age: 17,
        kurs: "english"
    },
    {
        name: "Dima",
        age: 16,
        kurs: "english"
    },
];

function displayStudentInfo(student) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === student) {
            console.log(`Student: ${students[i].name}`);
            console.log(`Age: ${students[i].age}`);
            console.log(`Kurs: ${students[i].kurs}`);
        }
    }

}

displayStudentInfo("Alice");

