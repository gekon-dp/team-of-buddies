// Задание 1
// Создайте массив объектов с полями "name" и "price".
// Реализуйте функцию hasExpensiveItem, используя метод some,
// чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const items = [
  { name: "apple", price: 20 },
  { name: "banana", price: 40 },
  { name: "ananas", price: 64 },
  { name: "peach", price: 43 },
];

hasExpensiveItem = (arr) => {
  const result = arr.some((element) => {
    return element.price > 50;
  });

  return result;
};

const hasExpensive = hasExpensiveItem(items);
console.log(hasExpensive);
