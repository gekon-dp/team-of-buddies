// Task 1
// Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

const body = document.querySelector("body");
const newContainer = document.createElement("div");

newContainer.setAttribute("class", "container");

newContainer.textContent = "Текст внутри созданного div";
newContainer.innerHTML = `"Это <em>курсивный</em> текст"`;

body.append(newContainer);
