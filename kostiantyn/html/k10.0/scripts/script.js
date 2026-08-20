// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

const myBlock = document.querySelector(".original");

myBlock.addEventListener("mouseover", () => {
  myBlock.setAttribute("style", "background-color:red;");
});

myBlock.addEventListener("mouseout", () => {
  myBlock.style.cssText = "background-color:blue";
});

// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент

const randomColorBlock = document.querySelector("#color-block");
const randomColorBtn = document.querySelector("#colorButton");
const newcolor = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
randomColorBtn.addEventListener("click", () => {
  randomColorBlock.style.backgroundColor = newcolor();
});
