// Задание 1
// Создайте простую веб-страницу, где пользователь может
// вводить текст заметки. Рядом с полем ввода должна быть
// кнопка "Сохранить", которая сохраняет введенный текст в localStorage.
// Также добавьте блок, в котором будет отображаться последняя
// сохраненная заметка. При обновлении страницы заметка должна оставаться на месте.

const noteInput = document.getElementById("noteInput");
const saveButton = document.getElementById("saveButton");
const noteDisplay = document.getElementById("noteDisplay");

function loadSavedNote() {
  const savedNote = localStorage.getItem("userNote");
  if (savedNote !== null) {
    noteDisplay.textContent = savedNote;
  }
}

loadSavedNote();

function saveNote() {
  const text = noteInput.value;

  if (text !== "") {
    localStorage.setItem("userNote", text);
    noteDisplay.textContent = text;
    noteInput.value = "";
  }
}

saveButton.addEventListener("click", saveNote);
