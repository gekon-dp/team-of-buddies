const BASE_URL = "https://dummyjson.com";

// Находим элементы на странице
const form = document.getElementById("form");
const todosInput = document.querySelector(".form-input");
const getAllTodosBtn = document.querySelector(".get-all-btn");
const removeAllBtn = document.querySelector(".remove-btn");

// Функция получения всех задач с сервера
async function fetchTodos() {
  try {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json();
    return data.todos;
  } catch (error) {
    console.log(error);
  }
}

// Функция отправки новой задачи на сервер
async function createTodo(todoData) {
  try {
    const response = await fetch(`${BASE_URL}/todos/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Вспомогательная функция для работы с контейнером списка
function getOrCreateContainer() {
  let todoListContainer = document.getElementById("todo-list");

  if (!todoListContainer) {
    todoListContainer = document.createElement("ul");
    todoListContainer.id = "todo-list";
    todoListContainer.style.listStyle = "none";
    todoListContainer.style.padding = "0";
    todoListContainer.style.marginTop = "20px";
    todoListContainer.style.display = "flex";
    todoListContainer.style.flexDirection = "column";
    todoListContainer.style.gap = "8px";
    document.getElementById("container").appendChild(todoListContainer);
  }

  return todoListContainer;
}

// Функция создания одной строки todo со структурой под ваш CSS
function createTodoElement(todoItem) {
  // 1. Создаем li с классом .todo из вашего CSS
  const li = document.createElement("li");
  li.classList.add("todo");

  // 2. Создаем чекбокс
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todoItem.completed;

  // 3. Создаем тег для текста с классом .todo-label
  const label = document.createElement("span");
  label.classList.add("todo-label");
  label.textContent = todoItem.todo;

  // Если задача пришла выполненной, сразу добавляем класс модификатор
  if (todoItem.completed) {
    label.classList.add("todo-label-done");
  }

  // Интерактив: переключение класса при клике на чекбокс на клиенте
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      label.classList.add("todo-label-done");
    } else {
      label.classList.remove("todo-label-done");
    }
  });

  // Собираем структуру вместе
  li.appendChild(checkbox);
  li.appendChild(label);

  return li;
}

// Вывод списка по кнопке getAll
const renderTodo = () => {
  getAllTodosBtn.addEventListener("click", async () => {
    const todos = await fetchTodos();
    if (!todos) return;

    const todoListContainer = getOrCreateContainer();
    todoListContainer.innerHTML = ""; // Очищаем старое

    todos.forEach((item) => {
      const todoElement = createTodoElement(item);
      todoListContainer.appendChild(todoElement);
    });
  });
};

// Добавление новой задачи через форму
const createNewTodo = () => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const todoText = todosInput.value.trim();
    if (!todoText) return;

    const newTodoData = {
      todo: todoText,
      completed: false,
      userId: 1,
    };

    const createdTodo = await createTodo(newTodoData);

    if (createdTodo) {
      const todoListContainer = getOrCreateContainer();
      const newTodoElement = createTodoElement(createdTodo);

      // Вставляем новую задачу в начало списка
      todoListContainer.prepend(newTodoElement);
      todosInput.value = "";
    }
  });
};

// Очистка всего списка по кнопке Delete All
const initDeleteAll = () => {
  if (removeAllBtn) {
    removeAllBtn.addEventListener("click", () => {
      const todoListContainer = document.getElementById("todo-list");
      if (todoListContainer) {
        // Просто полностью очищаем содержимое контейнера с экрана
        todoListContainer.innerHTML = "";
      }
    });
  }
};

// Инициализируем весь проект
renderTodo();
createNewTodo();
initDeleteAll();
