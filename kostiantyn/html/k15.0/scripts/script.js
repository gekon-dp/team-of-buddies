// Задание 1.
// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/.
// По пути(path)  /users получить всех пользователей.
// На веб-странице для каждого пользователя отрисовать карточку
// и указать следующие данные: id, username, email, address.city, phone и company.name.
// Стили добавляем произвольно.

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchAndRenderUsers() {
  const container = document.getElementById("users-container");

  try {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const users = await response.json();

    container.innerHTML = "";

    // Перебираем пользователей и создаем карточки
    users.forEach((user) => {
      // Создаем элемент карточки
      const card = document.createElement("div");
      card.className = "user-card";

      // Наполняем карточку данными из объекта user
      card.innerHTML = `
        <div class="user-id">ID: ${user.id}</div>
        <h3 class="user-name">${user.username}</h3>
        <div class="user-info">
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Город:</strong> ${user.address.city}</p>
          <p><strong>Телефон:</strong> ${user.phone}</p>
          <p><strong>Компания:</strong> ${user.company.name}</p>
        </div>
      `;

      // Добавляем готовую карточку в контейнер на странице
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Не удалось загрузить пользователей:", error);
    container.innerHTML = `<p style="color: red; text-align: center;">Произошла ошибка при загрузке данных.</p>`;
  }
}

fetchAndRenderUsers();
