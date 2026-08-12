// Задание 1
const user = {
  name: "Kostiantyn",
  age: 34,
};

console.log(user);

// Задание 2
const books = {
  list: [
    { title: "Harry Potter", author: "Joanne Rowling" },
    { title: "Digital Photography", author: "Scott Kelby" },
    { title: "The Prince", author: "Nicolo Machiavelli" },
  ],
};

for (let key in books.list) {
  console.log(`${books.list[key].title} - ${books.list[key].author}`);
}

// Задание 3
const rectangle = {
  a: 10,
  b: 35,
};

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);

console.log(rectangle);

// Задание 4
const fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Strawberry", color: "red" },
  { name: "Pear", color: "green" },
  { name: "Cherry", color: "red" },
];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].color === "red") {
    console.log(fruits[i]);
  }
}

// Задание 5
const playlist = {
  songs: [
    {
      author: "Linkin Park",
      song: "Numb",
      duration: "3:40",
    },
    {
      author: "Linkin Park",
      song: "Papercut",
      duration: "4:20",
    },
    {
      author: "Linkin Park",
      song: "Faint",
      duration: "2:51",
    },
  ],
};

for (let key in playlist.songs) {
  console.log(`${playlist.songs[key].author} - ${playlist.songs[key].song} | ${playlist.songs[key].duration}`);
}
