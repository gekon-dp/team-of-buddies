// Задача 1
// Создайте класс CopyEntity. У него должен быть статический метод copyObject,
// который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.

// Например:
// const arr1 = [1, 2, 3];
// const arr2 = CopyEntity.copyObject(arr1);

// arr1[0] = 999;
// console.log(arr1);
// console.log(arr2);

class CopyEntity {
  /**
   * Статический метод для создания глубокой копии любого объекта.
   * @param {any} obj - Исходный объект для копирования.
   * @returns {any} - Глубокая копия объекта.
   */
  static copyObject(obj) {
    // structuredClone отлично справляется с массивами, объектами, Date, Map, Set и т.д.
    return structuredClone(obj);
  }
}

const arr1 = [1, 2, 3];
const arr2 = CopyEntity.copyObject(arr1);

arr1[0] = 999;
console.log("Оригинал после изменения:", arr1); // [999, 2, 3]
console.log("Копия (осталась прежней):", arr2); // [1, 2, 3]
