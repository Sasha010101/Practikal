// 1. Завдання:
//    - Дано масив об'єктів користувачів із властивостями name, age та email.
//    - Поверніть масив імен користувачів, чий вік більше 18 і чий email містить домен example.com.
// function getAdultUsers(arr_obj) {
//   return arr_obj.filter(
//     (user) => user.age > 18 && user.email.endsWith("@example.com")
//   );
// }

// const users = [
//   { name: "Alice", age: 25, email: "alice@example.com" },
//   { name: "Bob", age: 17, email: "bob@other.com" },
//   { name: "Charlie", age: 22, email: "charlie@example.com" },
// ];
// console.log(getAdultUsers(users));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Завдання:
//    - Дано масив об'єктів товарів із властивостями productName, price та category.
//    - Поверніть масив назв товарів, ціна яких менша за 100 і які належать до категорії electronics.
// function logNamesPriceLessAndBelongsCategory(arr_obj) {
//   return arr_obj
//     .filter(
//       (product) => product.price < 100 && product.category === "electronics"
//     )
//     .map((product) => product.productName);
// }
// const products = [
//   { productName: "Laptop", price: 999, category: "electronics" },
//   { productName: "Mouse", price: 25, category: "electronics" },
//   { productName: "Keyboard", price: 75, category: "electronics" },
//   { productName: "Chair", price: 150, category: "furniture" },
// ];
// console.log(logNamesPriceLessAndBelongsCategory(products));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// . Завдання:
//    - Дано масив рядків, кожен з яких є адресою електронної пошти.
//    - Поверніть масив доменів електронних поштових скриньок, які містять у домені підрядок mail.
// for (const iterator of object) {
//   function getUniqEmail(arr) {
//     //   return arr.filter((email) => email.endsWith("mail.com"));
//     return arr.filter((email) => {
//       const domen = email.split("@")[1];
//       return domen.includes("mail");
//     });
//   }
//   const emails = [
//     "user1@mail.com",
//     "user2@gmail.com",
//     "user3@mailservice.com",
//     "user4@yahoo.com",
//   ];
//   console.log(getUniqEmail(emails));
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Завдання:
//    - Дано масив об'єктів студентів із властивостями name, score, major.
//    - Поверніть масив об'єктів студентів, у яких спеціальність computer science, а оцінка більше 85.
// function geScoreStudentsAndUniqMajor(arr_obj) {
//   return arr_obj.filter(
//     (student) => student.major === "computer science" && student.score > 85
//   );
// }

// const students = [
//   { name: "Dave", score: 90, major: "computer science" },
//   { name: "Eve", score: 88, major: "mathematics" },
//   { name: "Frank", score: 92, major: "computer science" },
//   { name: "Grace", score: 75, major: "computer science" },
// ];

// console.log(geScoreStudentsAndUniqMajor(students));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Завдання:
//    - Дано масив чисел.
//    - Поверніть масив об'єктів із двома властивостями: number та isEven, де isEven дорівнює true, якщо число парне, і false, якщо число непарне.
// function getArrObjWithTwoKeys(arr_numbers) {
//   return numbers.map((number) => ({
//     number: number,
//     isEven: number % 2 === 0,
//   }));
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getArrObjWithTwoKeys(numbers));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Завдання:
//    - Дано масив об'єктів книг із властивостями title, author та year.
//    - Поверніть масив назв книг, які були написані після 2000 року і автори яких починаються на букву "J".
// function getArrNewersBooksWithLetterJ(arr_obj_books) {
//   return arr_obj_books.filter(
//     (book) => book.year > 2000 && book.author.startsWith("J")
//   );
// }
// const books = [
//   { title: "Book One", author: "John Smith", year: 1999 },
//   { title: "Book Two", author: "Jane Doe", year: 2005 },
//   { title: "Book Three", author: "James Brown", year: 2010 },
//   { title: "Book Four", author: "Anna Bell", year: 2001 },
// ];
// console.log(getArrNewersBooksWithLetterJ(books));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Завдання:
//    - Дано масив рядків, кожен з яких є фразою.
//    - Поверніть масив фраз, які містять слово JavaScript, і зробіть їх усі великими літерами.
function getarrFrazWithWordJavaScrips(arr) {
  return arr
    .filter((phrase) => phrase.includes("JavaScript"))
    .map((phrase) => phrase.toUpperCase());
}
const phrases = [
  "I love JavaScript",
  "JavaScript is fun",
  "I enjoy coding",
  "Programming in JavaScript",
];
console.log(getarrFrazWithWordJavaScrips(phrases));
