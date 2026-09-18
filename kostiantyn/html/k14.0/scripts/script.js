// Задание 1
// После реализации основного функционала проекта “Регистрации и Авторизации с помощью localstorage”
// реализовать валидацию инпутов (Имя, Эмейл, Телефон, Пароль) с помощью JS.
// Имя { Минимум 2 символа, Максимум 24 символа, Только буквы }
// Эмейл {Наличие символа@,  Минимум 7 символов }
// Телефон { Первый символ + Максимум 12 чисел, Минимум 8 чисел, Только числа}
// Пароль {Минимум 5 символов, максимум 26 символов}

// ==========================================
// 1. ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ ИЗ HTML
// ==========================================
const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const registerFields = document.getElementById("register-only-fields");
const formToggleText = document.getElementById("form-toggle-text");
const authForm = document.getElementById("auth-form");

// Поля ввода (строго по ID из HTML)
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("login");
const passwordInput = document.getElementById("password");

// Элемент для вывода сообщений об ошибках / успехе
const requiredPar = document.createElement("p");
requiredPar.style.margin = "15px 0 0 0";
requiredPar.style.textAlign = "center";
requiredPar.style.fontWeight = "bold";

// Текущий режим формы ('login' или 'register')
let currentMode = "login";

// Получаем базу пользователей или создаем пустой массив
const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

// ==========================================
// 2. ФУНКЦИИ ПЕРЕКЛЮЧЕНИЯ РЕЖИМОВ
// ==========================================
function switchToLogin() {
  currentMode = "login";
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  formTitle.textContent = "Log in to your account";
  submitBtn.textContent = "Log In";

  // Скрываем поля регистрации и убираем обязательность
  registerFields.style.display = "none";
  nameInput.removeAttribute("required");
  phoneInput.removeAttribute("required");

  formToggleText.innerHTML =
    'New to Heroku? <a href="#" id="link-register">Sign Up</a>';

  // Вешаем событие на динамически созданную ссылку
  document
    .getElementById("link-register")
    .addEventListener("click", (event) => {
      event.preventDefault();
      switchToRegister();
    });
}

function switchToRegister() {
  currentMode = "register";
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  formTitle.textContent = "Create your account";
  submitBtn.textContent = "Sign Up";

  // Показываем поля регистрации и делаем обязательными
  registerFields.style.display = "block";
  nameInput.setAttribute("required", "required");
  phoneInput.setAttribute("required", "required");

  formToggleText.innerHTML =
    'Already have an account? <a href="#" id="link-login">Log In</a>';

  // Вешаем событие на динамически созданную ссылку
  document.getElementById("link-login").addEventListener("click", (event) => {
    event.preventDefault();
    switchToLogin();
  });
}

// Слушатели кликов по табам
tabLogin.addEventListener("click", switchToLogin);
tabRegister.addEventListener("click", switchToRegister);

// Слушатель для самой первой ссылки "Sign Up" из стартового HTML
document.getElementById("link-register").addEventListener("click", (event) => {
  event.preventDefault();
  switchToRegister();
});

// ==========================================
// 3. ФУНКЦИЯ ВАЛИДАЦИИ
// ==========================================
function validateForm() {
  // Удаляем старое сообщение перед новой проверкой
  requiredPar.remove();

  // В режиме LOGIN проверяем только на пустые поля эмейла и пароля
  if (currentMode === "login") {
    if (!emailInput.value.trim() || !passwordInput.value) {
      showError("Необходимо заполнить все поля!");
      return false;
    }
    return true; // Для логина встроенные правила длины проверять не обязательно
  }

  // --- ВАЛИДАЦИЯ ДЛЯ РЕГИСТРАЦИИ ---
  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;

  // Проверка на пустые поля (общая)
  if (!nameValue || !phoneValue || !emailValue || !passwordValue) {
    showError("Все поля обязательны для заполнения!");
    return false;
  }

  // 1. Валидация Имени
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/; // только буквы
  if (nameValue.length < 2 || nameValue.length > 24) {
    showError("Имя должно быть от 2 до 24 символов!");
    return false;
  }
  if (!nameRegex.test(nameValue)) {
    showError("Имя должно содержать только буквы!");
    return false;
  }

  // 2. Валидация Телефона
  if (phoneValue[0] !== "+") {
    showError("Телефон должен начинаться с символа '+'!");
    return false;
  }
  const phoneNumbersOnly = phoneValue.slice(1); // отрезаем плюс
  const digitsRegex = /^\d+$/; // только цифры
  if (!digitsRegex.test(phoneNumbersOnly)) {
    showError("Телефон после '+' должен содержать только числа!");
    return false;
  }
  if (phoneNumbersOnly.length < 8 || phoneNumbersOnly.length > 12) {
    showError("Телефон должен содержать от 8 до 12 чисел!");
    return false;
  }

  // 3. Валидация Эмейла
  if (!emailValue.includes("@")) {
    showError("Эмейл должен содержать символ '@'!");
    return false;
  }
  if (emailValue.length < 7) {
    showError("Эмейл должен быть минимум 7 символов!");
    return false;
  }

  // 4. Валидация Пароля
  if (passwordValue.length < 5 || passwordValue.length > 26) {
    showError("Пароль должен быть от 5 до 26 символов!");
    return false;
  }

  return true; // Все проверки успешно пройдены
}

// Вспомогательная функция вывода ошибок
function showError(message) {
  requiredPar.innerText = message;
  requiredPar.style.color = "red";
  authForm.querySelector(".form-content").appendChild(requiredPar);
}

// ==========================================
// 4. ОБРАБОТЧИК ОТПРАВКИ ФОРМЫ (SUBMIT)
// ==========================================
authForm.addEventListener("submit", (evente) => {
  event.preventDefault(); // отмена перезагрузки страницы

  // Запуск валидации. Если вернулся false — прерываем выполнение
  if (!validateForm()) return;

  // ---- ЛОГИКА РЕГИСТРАЦИИ ----
  if (currentMode === "register") {
    const isEmailTaken = users.some(
      (user) => user.email === emailInput.value.trim(),
    );

    if (isEmailTaken) {
      showError("Пользователь с такой почтой уже существует!");
    } else {
      const userData = {
        name: nameInput.value.trim(),
        phoneNumber: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value,
      };

      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));

      authForm.reset(); // очистка полей

      requiredPar.innerText = "Вы успешно зарегистрировались!";
      requiredPar.style.color = "green";
      authForm.querySelector(".form-content").appendChild(requiredPar);

      // Авто-переключение на логин через 1.5 секунды
      setTimeout(switchToLogin, 1500);
    }
  }
  // ---- ЛОГИКА ВХОДА (LOGIN) ----
  else {
    const foundUser = users.find(
      (user) =>
        user.email === emailInput.value.trim() &&
        user.password === passwordInput.value,
    );

    if (!foundUser) {
      showError("Вы ввели неверную почту или пароль");
    } else {
      // Очищаем форму и контейнер для успешного экрана
      const container = document.querySelector(".container");
      container.innerHTML = "";

      requiredPar.innerText = `Вы успешно вошли, ${foundUser.name}!`;
      requiredPar.style.color = "green";
      requiredPar.style.fontSize = "22px";
      container.appendChild(requiredPar);

      // Кнопка Logout
      const btnLogout = document.createElement("button");
      btnLogout.innerText = "Logout";
      btnLogout.className = "submit";
      btnLogout.style.marginTop = "20px";
      btnLogout.addEventListener("click", () => {
        location.reload(); // Перезагрузка страницы вернет форму назад
      });
      container.appendChild(btnLogout);
    }
  }
});
