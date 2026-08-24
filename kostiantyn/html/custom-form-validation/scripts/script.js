const registerForm = document.querySelector(".registration");
const statusEmail = document.querySelector(".statusEmail");
const statusPassword = document.querySelector(".statusPassword");
const statusMessage = document.querySelector(".statusMessage");

function isValidEmail(value) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "@") {
      return true;
    }
  }
  return false;
}

function isValidPassword(value) {
  return value.length > 2 && value.length < 26;
}

function clearAllMessages() {
  statusEmail.textContent = "";
  statusEmail.classList.remove("errorMessage");
  statusPassword.textContent = "";
  statusPassword.classList.remove("errorMessage");
  statusMessage.textContent = "";
  statusMessage.classList.remove("acceptMessage");
}

// 1. Обработка отправки формы
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  clearAllMessages();

  const myEmailValue = document.querySelector("#user-email").value;
  const myPasswordValue = document.querySelector("#user-password").value;

  if (!isValidEmail(myEmailValue)) {
    statusEmail.classList.add("errorMessage");
    statusEmail.textContent = "Введите корректный email!";
    return;
  }

  if (!isValidPassword(myPasswordValue)) {
    statusPassword.classList.add("errorMessage");
    statusPassword.textContent = "Введите корректный пароль!";
    return;
  }

  // СНАЧАЛА сбрасываем поля формы
  registerForm.reset();

  // ЗАТЕМ выводим сообщение об успехе (теперь reset его не сотрет)
  statusMessage.classList.add("acceptMessage");
  statusMessage.textContent = "Форма отправлена";
});

// 2. Обработка нажатия на физическую кнопку очистки (сброса)
registerForm.addEventListener("reset", (event) => {
  // Очищаем сообщение только если кликнул пользователь
  if (event.isTrusted) {
    clearAllMessages();
  }
});
