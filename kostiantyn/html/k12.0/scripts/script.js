// Задание 1
// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map,
// чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением
// "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

const people = [
  { name: "Alice", age: 1 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 },
];

const result = people.map((element) => {
  if (element.age >= 18) {
    return {
      ...element,
      status: "взрослый",
    };
  } else {
    return {
      ...element,
      status: "ребенок",
    };
  }
});

console.log(result);

// Задание 2
// Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach,
// чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

const movies = [
  { title: "Inception", rating: 3.9 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 4.8 },
  { title: "The Matrix", rating: 3.5 },
];

movies.forEach((element) => {
  if (element.rating > 4) {
    console.log(element.title);
  }
});
