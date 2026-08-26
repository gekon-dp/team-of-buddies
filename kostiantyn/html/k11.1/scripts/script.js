// Создайте HTML-страницу с кнопкой "Кликни меня" и блоком,
// в котором будет отображаться количество кликов.
// Используя JavaScript, при клике на кнопку увеличивайте
// счетчик кликов и изменяйте цвет фона блока. Если количество
// кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.
// При достижении 10 кликов выведите сообщение под блоком
// с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

const infoBlock = document.querySelector(".click-count");
const countText = document.querySelector(".count-text");
const clickBtn = document.querySelector(".click-btn");
const congratText = document.querySelector(".congratulation-text");

let count = 0;
let congratulation = "";
clickBtn.addEventListener("click", () => {
  count++;
  countText.textContent = count;
  const newcolor = () =>
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  if (count % 5 === 0) {
    infoBlock.style.backgroundColor = newcolor();
  }

  if (count % 10 === 0) {
    congratulation = `Вы достигли ${count} кликов`;
    congratText.textContent = congratulation;
  }
});

const newcolor = () => {
  "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
};
