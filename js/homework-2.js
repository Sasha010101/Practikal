// 1. Завдання:
//  - Дано масив об'єктів користувачів із властивостями name, age та email.
//  - Поверніть масив імен користувачів, чий вік більше 18 і чий email містить домен example.com.
// function getAdultUsers(arr_obj) {
//   return arr_obj.filter(
//     ({ age, email }) => age > 18 && email.endsWith("@example.com")
//   );
// }

// function getAdultUsersNames(arr_obj) {
//   return arr_obj
//     .filter(({ age, email }) => age > 18 && email.endsWith("@example.com"))
//     .map(({ name }) => name);
// }

// const users = [
//   { name: "Alice", age: 25, email: "alice@example.com" },
//   { name: "Bob", age: 17, email: "bob@other.com" },
//   { name: "Charlie", age: 22, email: "charlie@example.com" },
// ];

// console.log(getAdultUsersNames(users));
// console.log(getAdultUsers(users));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Завдання:
//    - Дано масив об'єктів товарів із властивостями productName, price та category.
//    - Поверніть масив назв товарів, ціна яких менша за 100 і які належать до категорії electronics.
// function getNamesPriceLessAndBelongsCategory(arr_obj) {
//   return arr_obj
//     .filter(({price,category}) => price < 100 && category === "electronics")
//     .map(({productName}) => productName);
// }
// const products = [
//   { productName: "Laptop", price: 999, category: "electronics" },
//   { productName: "Mouse", price: 25, category: "electronics" },
//   { productName: "Keyboard", price: 75, category: "electronics" },
//   { productName: "Chair", price: 150, category: "furniture" },
// ];
// console.log(getNamesPriceLessAndBelongsCategory(products));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// . Завдання:
//    - Дано масив рядків, кожен з яких є адресою електронної пошти.
//    - Поверніть масив доменів електронних поштових скриньок, які містять у домені підрядок mail.
//
// function getUniqEmail(arr) {
//   //   return arr.filter((email) => email.endsWith("mail.com"));
//   return arr.filter((email) => {
//     const domen = email.split("@")[1];
//     return domen.includes("mail");
//   });
// }

// // return arr.filter((email) => email.split("@")[1].includes("mail"));

// const emails = [
//   "user1@mail.com",
//   "user2@gmail.com",
//   "user3@mailservice.com",
//   "user4@yahoo.com",
// ];
// console.log(getUniqEmail(emails));
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Завдання:
//    - Дано масив об'єктів студентів із властивостями name, score, major.
//    - Поверніть масив об'єктів студентів, у яких спеціальність computer science, а оцінка більше 85.
// function geScoreStudentsAndUniqMajor(arr_obj) {
//   return arr_obj.filter(
//     ({major, score}) => major === "computer science" && score > 85
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
//   return arr_numbers.map((number) => ({
//     number: number,
//     isEven: number % 2 === 0,//!(number % 2)
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
//     ({year, author}) => year > 2000 && author.startsWith("J")
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
// function getarrFrazWithWordJavaScrips(arr) {
//   return arr
//     .filter((phrase) => phrase.includes("JavaScript"))
//     .map((phrase) => phrase.toUpperCase());
// }
// const phrases = [
//   "I love JavaScript",
//   "JavaScript is fun",
//   "I enjoy coding",
//   "Programming in JavaScript",
// ];
// console.log(getarrFrazWithWordJavaScrips(phrases));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Завдання:
//    - Дано масив об'єктів продуктів із властивостями productName, price та available.
//    - Поверніть масив назв продуктів, які доступні (`available: true`) і ціна яких більша за 50.

// function getFilteredproductNames(arr_obj) {
//   return arr_obj
//     .filter(({ available, price }) => available && price > 50)
//     .map(({ productName }) => productName);
// }

// function maybeFaster(arr_obj) {
//   let result = [];
//   arr_obj.forEach(({ productName, price, available }) => {
//     available && price > 50 ? result.push(productName) : "";
//   });
//   return result;
// }

// const items = [
//   { productName: "Phone", price: 600, available: true },
//   { productName: "Tablet", price: 300, available: false },
//   { productName: "Laptop", price: 1000, available: true },
//   { productName: "Headphones", price: 30, available: true },
//   { productName: "Phone1", price: 600, available: true },
//   { productName: "Tablet1", price: 300, available: false },
//   { productName: "Laptop1", price: 1020, available: true },
//   { productName: "Headphones1", price: 30, available: true },
//   { productName: "Phone2", price: 600, available: true },
//   { productName: "Tablet2", price: 300, available: false },
//   { productName: "Laptop2", price: 1040, available: true },
//   { productName: "Headphones2", price: 40, available: true },
//   { productName: "Phone3", price: 600, available: true },
//   { productName: "Tablet3", price: 300, available: false },
//   { productName: "Laptop3", price: 1000, available: false },
//   { productName: "Headphones3", price: 20, available: true },
//   { productName: "Phone4", price: 600, available: true },
//   { productName: "Tablet4", price: 300, available: false },
//   { productName: "Laptop4", price: 1020, available: false },
//   { productName: "Headphones4", price: 30, available: true },
//   { productName: "Phone5", price: 600, available: true },
//   { productName: "Tablet5", price: 300, available: false },
//   { productName: "Laptop5", price: 1000, available: true },
//   { productName: "Headphones5", price: 50, available: true },
//   { productName: "Phone6", price: 600, available: true },
//   { productName: "Tablet6", price: 300, available: false },
//   { productName: "Laptop6", price: 1010, available: false },
//   { productName: "Headphones6", price: 30, available: true },
// ];
// console.time("first");
// console.log(getFilteredproductNames(items));
// console.timeEnd("first");

// console.time("second");
// console.log(maybeFaster(items));
// console.timeEnd("second");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9. Завдання:
//    - Дано масив об'єктів користувачів із властивостями name, subscriptionType (`basic`, premium, `gold`).
//    - Поверніть масив імен користувачів, які мають підписку типу premium або gold.
function getVipSubscriptionUsers(users_arr) {
  return users_arr
    .filter(
      ({ subscriptionType }) =>
        subscriptionType === "premium" || subscriptionType === "gold"
    )
    .map(({ name }) => name);
}
const users = [
  { name: "Alice", subscriptionType: "basic" },
  { name: "Bob", subscriptionType: "premium" },
  { name: "Charlie", subscriptionType: "gold" },
  { name: "Dave", subscriptionType: "basic" },
];
console.log(getVipSubscriptionUsers(users));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12. Завдання:
//     - Дано масив об'єктів employees із властивостями name, department, salary.
//     - Поверніть масив об'єктів із властивостями name та adjustedSalary,{name:'g', adjustedSalary:676}
// де adjustedSalary дорівнює salary, !якщо департамент не HR!, і salary помножене на 1.1, !якщо департамент HR!.
function getArrWithKeys(employees_arr) {
  return employees_arr.map(({ name, department, salary }) => {
    if (department !== "HR") {
      return {
        name, //name:name->bame
        adjustSalary: salary,
      };
    } else if (department === "HR") {
      return {
        name,
        adjustSalary: salary * 1.1,
      };
    }
  });
}
const employees = [
  { name: "Ivy", department: "HR", salary: 50000 },
  { name: "Jack", department: "Engineering", salary: 70000 },
  { name: "Kelly", department: "HR", salary: 55000 },
  { name: "Leo", department: "Marketing", salary: 60000 },
];
console.log(getArrWithKeys(employees));
