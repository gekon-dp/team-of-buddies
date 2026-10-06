// Задача 1
// Создать функцию, которая будет изменять цвет фона элемента каждую секунду.
// Цвет должен меняться случайным образом из заданного набора цветов.
// const colors = ['#ff0000', '#00ff00', '#0000ff'];

const myBlock = document.querySelector(".container");
const colors = ["#ff0000", "#00ff00", "#0000ff"];

const bgRandomColor = () => {
  setInterval(() => {
    // Генерируем случайный индекс от 0 до длины массива (не включая её)
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Меняем цвет фона у элемента
    myBlock.style.backgroundColor = colors[randomIndex];
  }, 1000);
};

bgRandomColor();
