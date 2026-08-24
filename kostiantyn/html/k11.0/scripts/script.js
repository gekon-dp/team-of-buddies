// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).
// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.

const users = [
  {
    name: "Kostiantyn",
    password: "12345",
  },
  {
    name: "Galina",
    password: "87654321",
  },
];

const myForm = document.querySelector(".registration");
const myLoginInput = document.querySelector("#user-login");
const myPasswordInput = document.querySelector("#user-password");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const myLoginValue = myLoginInput.value;
  const myPasswordValue = myPasswordInput.value;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === myLoginValue) {
      foundUser = users[i];
      break;
    }
  }

  if (foundUser === null) {
    console.log("Неверный логин");
  } else if (foundUser.password !== myPasswordValue) {
    console.log("Неверный пароль");
  } else {
    console.log(`Добро пожаловать, ${foundUser.name}!`);
    myForm.reset();
  }
});
