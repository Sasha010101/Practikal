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
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let total of order) {
    total += order;
  }

  // Change code above this line
  return total;
}
