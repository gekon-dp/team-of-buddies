// Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0)
// и методы increment и decrement для увеличения и уменьшения значения count соответственно.

const counter = {
  count: 0,

  increment() {
    this.count++;
  },

  decrement() {
    this.count--;
  },
};

// Проверка работы (ваши примеры вызова)
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// console.log(counter.count); // 9

counter.decrement();
counter.decrement();
counter.decrement();
// console.log(counter.count); // 6

counter.increment();
counter.increment();
// console.log(counter.count); // 8

counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.count); // 5
