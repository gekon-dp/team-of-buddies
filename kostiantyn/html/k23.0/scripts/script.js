// Задача 1
// Реализовать функцию, которая будет создавать элементы списка
// на основе массива данных. Каждый элемент списка должен содержать кнопку,
// при нажатии на которую будет происходить удаление этого элемента из списка.

const listContainer = document.querySelector(".my-list");
const createDeletableList = (data, parentElement) => {
  parentElement.innerHTML = "";

  data.forEach((itemText) => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText + " "; // Добавляем текст и пробел перед кнопкой

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    parentElement.appendChild(listItem);
  });
};

const skills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
createDeletableList(skills, listContainer);
