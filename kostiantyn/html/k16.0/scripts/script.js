// Задание 1
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1.
// Результат вывести в консоль.

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchTodo() {
  try {
    const response = await fetch(`${BASE_URL}/todos/1`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const todo = await response.json();
    console.log(todo);
  } catch (error) {
    console.error("Произошла ошибка при запросе:", error);
  }
}

fetchTodo();

// Задание 2
// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts.
// Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.

async function fetchTenPosts() {
  try {
    // Отправляем GET-запрос с query-параметром _limit=10
    const response = await fetch(`${BASE_URL}/posts?_limit=10`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const posts = await response.json();

    // Выводим массив из 10 элементов в консоль
    console.log(posts);
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
  }
}

fetchTenPosts();
