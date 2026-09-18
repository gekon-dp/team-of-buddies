// 1.Создайте функцию waitForTime, которая возвращает Promise.
// Этот промис должен резолвиться через указанное количество миллисекунд,
// которое нужно передавать в функцию waitForTime в качестве аргумента.
// Если время вышло, промис резолвится с сообщением "Ожидание завершено".
// Например через секунды, 3 или 5 секунд.

const waitForTime = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ожидание завершено");
    }, ms);
  });
};

// С использованием async/await
async function run() {
  console.log("Старт ожидания...");
  const message = await waitForTime(3000);
  console.log(message);
}

run();

// С использованием .then()
// console.log("Старт ожидания на 5 секунд...");

// waitForTime(5000).then((message) => {
//   console.log(message);
// });
