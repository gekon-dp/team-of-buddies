// Task 1
// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка).
// Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

const myList = document.querySelector(".my-list");

document.addEventListener("DOMContentLoaded", () => {
  if (myList.childElementCount > 5) {
    const lastElement = myList.lastElementChild;
    myList.removeChild(lastElement);
    console.log(myList);
  }
});
