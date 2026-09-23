// Задание 1
// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1,
// в блоке catch сделать вывод консоль сообщения об ошибке.
// Для проверки блока catch сделать намеренную ошибку в url запроса.

const BASE_URL = "https://jsonplaceholder.typicode.com";
async function fetchUser1Posts() {
  try {
    const response = await fetch(`${BASE_URL}/p2osts?userId=1`); // /posts?userId=1

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error("Произошла ошибка при запросе:", error);
  }
}

fetchUser1Posts();

// Задание 2
// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Ошибка: Деление на ноль невозможно!");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const result1 = divideNumbers(10, 2);
console.log(`Результат: ${result1}`);

const result2 = divideNumbers(10, 0);
console.log(`Результат: ${result2}`);
