// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

<<<<<<< HEAD
// const username = "Mango";
console.log("Username is ", username);

const message = "JavaScript is awesome!";
alert("messege");

const isComing = confirm("Please confirm hotel reservation");
console.log("isComing");

const hotelName = prompt("Please enter desired hotel name");
console.log(hotelName);

const value = prompt("Please enter a number!");
console.log(typeof value); // "string"
console.log(value); // "5

// const x =10;
const b = 596;
console.log(x * b);

let value = 5;
value += 10;
console.log(value);

const x = 5;
const y = 10;
const z = 5;
console.log = prompt("x > y:", x > y);
console.log = prompt("x < y:", x < y);

a > b і a < b - більше / менше
a >= b і a <= b - більше / менше або дорівнює
a == b - рівність
a != b - нерівність
a === b - строга рівність
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
=======
// if(planets.length > 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
>>>>>>> 49cef5b7bb8f15c4c5c9157731a8eec9cf1678a0
// }

// let a = ["Mango", "Poly"];
// let b = a;
// a = "Tolik"
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]



// const user = {
//   username: "Victor",
//   showName() {
// 		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();
// class Car {
//   constructor(params) {
//     this._brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this._brand;
//   }

//   changeBrand(newBrand) {
//     this._brand = newBrand;
//   }
// }
// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }
//   static checkPrice(price) {
//     if(price > Car.#maxPrice){
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     }
//   }
// }


// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// є масив чисел та строк та булеан значень -
//  вивести з доп меп кожне значення у консоль
// модифікувати попередне завдання так, щоб результат
//  визову функції меп повернув новий масив який буде складатись тільки з чисел

// const arr = [1, "str", 8, "allo", 22, "hello", true, false];
// let new_arr = arr.map(element => {
//     if(typeof(element) === "number"){
//      return element;
//     }
//     return 
// })
// console.log(new_arr);
// 3) створити масив у якому будуть строки , 
// за допомогою методу меп створити новий масив який буде складатися з довжин строк минулого масиву

// const arr = ["allo", "nokia", "smart", "JS", "React", "Css"];
// let sum = 0;
// let new_arr = arr.map(element =>{
//     sum+=element.length;
// });
// console.log(sum);
// function calculateNumbers(numbers){
// return numbers.reduce((sum, number) => sum + number * number, 0);
// }
// const arrNumbers = [4, 8, 9, 3, 7, 5];
// console.log(calculateNumbers(arrNumbers));
// написати код , коли на кнопку наводити мишку - у кнопки буде зелений фон і білий текст
// а коли мишка уходить - фон буде сірий, а текст чорний
const bookEl = document.querySelector(".book");
bookEl.addEventListener("mouseover", event =>{
    bookEl.style.cssText = `
 background: green;
 color: white;
`;
    console.log(bookEl);
});
bookEl.addEventListener("mouseout", event =>{
    bookEl.style.cssText = `
    background: gray;
    color: black;
`;
    console.log(bookEl);
});
// є інпут, при наведенні мишки - додати синю тінь до інпуту,
//  а при втраті фокусу - вивести алерт з текстом з інпуту
const test_inpEl = document.getElementById("test_inp");
test_inpEl.addEventListener("mouseover", event =>{
test_inpEl.style.boxShadow = '0px 0px 10px blue';
});

test_inpEl.addEventListener("mouseout", event =>{
    test_inpEl.style.boxShadow = 'none';
    alert(test_inpEl.value);
    });
    
