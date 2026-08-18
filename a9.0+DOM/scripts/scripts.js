// const myContainer = document.createElement("div");
// const myText = document.createElement("p");
// const body = document.querySelector("body");
// myContainer.setAttribute("class", "redCube"); //добавляем свойства элемента
// // чтобы появился на экране после css:

// console.log(myContainer);
// body.append(myContainer);
// body.append(myText);
// myText.textContent = "Hello";
// const list = document.createElement("ul");
// for (let i = 1; i <= 3; i++) {
//   const listItems = document.createElement("li");
//   listItems.textContent = "Point" + i;
//   list.append(listItems);
// }
// document.body.append(list);

// container.setAttribute("id", "myDiv");
// document.body.append(container);
// const button = document.createElement("button");
// button.textContent = "Push me";
// container.append(button);

// const myImg = document.createElement("img");
// myImg.setAttribute("src", "image.png");
// document.body.append(myImg);

//Создайте HTML-страницу с элементом <div>. Используя innerHTML,
// замените внутренний текст этого элемента на
// "Это <em>курсивный</em> текст".

const myContainer = document.createElement("div");
myContainer.innerHTML = "Это <em>курсивный</em> текст";
document.body.append(myContainer);
