// const message = "JavaScript is awesome!";
// console.log("message");

// const username = "Mango";
// console.log("Username is ", username);

// const message = "JavaScript is awesome!";
// alert("messege");

// const isComing = confirm("Please confirm hotel reservation");
// console.log("isComing");

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5

// const x =10;
// const b = 596;
// console.log( x * b);

// let value =5
// value += 10;
// console.log(value);

// const x = 5;
// const y = 10;
// const z = 5;
// console.log = prompt ("x > y:", x > y);
// console.log = prompt ("x < y:", x < y);

// a > b і a < b - більше/менше
// a >= b і a <= b - більше/менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - строга рівність
// a !== b - строга нерівність

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log((0.17 + 0.24) .toFixed(2));
// console.log(Math(0.7));

// const productName = "Droid";
// const pricePerItem = "2000";
// console.log ("productName");
// console.log ("pricePirItem");

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);
// const pricePerItem = "totalPrice";
// pricePerItem = 3500;
// const orderedQuantity = "pricePerItem";
// orderedQuantity = 4;

// // Change code below this line
// const totalPrice = priceP;
// totalPrice = 14000
// console.log (pricePerItem * orderedQuantity);

// function makeMessage (name, price) {
//   // Change code below this line
// const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const message = "You ordered droids worth ${orderQuantity} credits. Delivery (<delivery fee> credits) is included in total price.";
// return message;
// }
// console.log(makeOrderMessage(2 , 100 ,50));
// console.log(makeOrderMessage(4 , 300 ,100));
// console.log(makeOrderMessage(10 , 70 ,200));

// function isAdult(age) {
// const passed = 18>=;
// return passed;
 
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += a + 2;
// b -= b - 4;
// c *= c * 3;
// d /= d / 10;
// console.log();

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number >= end;

//   return isInRange;
// }
// console.log(isNumberInRange(10,30,17));
// console.log(isNumberInRange(10,30,5));
// console.log(isNumberInRange(20,50,24));
// console.log(isNumberInRange(20,50,76));

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number <= start && number >= end;
//   const isNotInRange = !number <= start || !number >= end; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// const productName = "Repair droid";
// console.log(productName.slice(9)); // "air dr"

// function calculateEngravingPrice(message, pricePerWord) {
//     let words;
//     words = message.split().length * pricePerWord;
//     return words;
// }

// const start = 10;
// const end = 44;
// for (let i = start; i <= end; i += 7){
//     console.log(i);
// }

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i += 1) {
//         total += i;

  
// }
//   return total;
// }
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(30));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let total of order) {
//     total += order;
//   }

//   // Change code above this line
//   return total;
// }

// task-1


// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// ТЕСТИ
// •  Оголошена функція getCommonElements(array1, array2)
// •  Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// •  Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// •  Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// •  Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// •  Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// •  Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// •  В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {

// const resultString  = ""; // concatination numbers to string " 1, 3, 22, 43, 0 "
//   const result = []; // 1.
//   for (let i = 0; i < array1.length; i++){  // 2.
//     if(array2.includes(array1[i])){ // 3
//         result.push(array1[i]);
//   }
// };
// return result;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// function getCommonElements(array1, array2) {
//   const result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }

// Homework2: get result in string; ////////////////////////////


// const hotelName = alert("Please enter desired hotel name");
// console.log(hotelName);
// newFunction();

// function newFunction() {
//   const num1 = 15;
//   const num2 = 9;
//   const biggerNumber = num1 > num2 ? num1 : num2;

//   console.log(biggerNumber);
// }

// Задачкаааааа
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const{hex, rgb } of colors) {
//  console.log(hex);
// console.log(rgb);
// }




// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }
// Home-work1////////////////////////////
// Method string replace
const num = 15;
const someString = "Jonh - +38093-866-877- 88";
// steps to resolve:
// 1.обрізаємо після +38 і обрізаємо.
// 2. Видаляємо дефіси.
// 3.Видаляємо пробіли/
const phoneNumber = "";
console.log(someString.split(" ", [0]) );

console.log(someString.split(' ')[0]); // Разделить по пробелу, взять первую часть
console.log(someString.match(/\d?\d:\d\d/)[0]); // совпадение по регулярному выражению
console.log(someString.substr(0, 5)); // 5 символов, начиная с 0го
console.log(someString.substring(0, 5)); // копировать по индексам [0:5)
console.log(someString.replace(/\s.*/, '')); // заменить пробел и всё, что дальше пустой строкой
console.log(someString.slice(0, -3)); // срез без последних трёх символов
// console.log("methods replace:", someString.replace(num, /5/, "09386687788")); // get "09386687788"js
console.log(Hello world);