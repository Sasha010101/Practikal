// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


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

// // const x =10;
// const b = 596;
// console.log(x * b);

// let value = 5;
// value += 10;
// console.log(value);

// const x = 5;
// const y = 10;
// const z = 5;
// console.log = prompt("x > y:", x > y);
// console.log = prompt("x < y:", x < y);

// a > b і a < b - більше / менше
// a >= b і a <= b - більше / менше або дорівнює
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
// if(planets.length > 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
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
// const bookEl = document.querySelector(".book");
// bookEl.addEventListener("mouseover", event =>{
//     bookEl.style.cssText = `
//  background: green;
//  color: white;
// `;
//     console.log(bookEl);
// });
// bookEl.addEventListener("mouseout", event =>{
//     bookEl.style.cssText = `
//     background: gray;
//     color: black;
// `;
//     console.log(bookEl);
// });
// є інпут, при наведенні мишки - додати синю тінь до інпуту,
//  а при втраті фокусу - вивести алерт з текстом з інпуту
// const test_inpEl = document.getElementById("test_inp");
// test_inpEl.addEventListener("mouseover", event =>{
// test_inpEl.style.boxShadow = '0px 0px 10px blue';
// });

// test_inpEl.addEventListener("mouseout", event =>{
//     test_inpEl.style.boxShadow = 'none';
//     alert(test_inpEl.value);
//     });




// 1. Створіть функцію, яка приймає масив чисел
// і повертає суму всіх додатніх чисел.

//     function calculateSumArrNumbers(numbers){
//     return numbers.reduce((sum, number)=>{
//         if(number > 0){
//             return sum += number;
//         }
//         return sum;
//     },0)
// }


//     const newArr = [-4, 10, -1, 8, 11, -5];
//     console.log(calculateSumArrNumbers(newArr));


    // c2. Напишіть функцію, яка приймає масив рядків та
    //  повертає новий масив, в якому всі рядки перетворені на заголовні.
// function giveNewArrWithUpperCase(string){
// return string.map(str => str.toUpperCase());
// };
// const arrStr = ["js", "html", "css", "react", "angular"];
// console.log(giveNewArrWithUpperCase(arrStr));



// 4. Напишіть функцію, яка приймає масив чисел і
// повертає новий масив, в якому всі числа збільшені на 10.

// function logNumbersPlusTen(numbers){
//     return numbers.map(number => number +10)

// };
// const arrNumber = [10, 12, 3, 7, 9, 44, 77, 84];
// console.log(logNumbersPlusTen(arrNumber));

// 5. Створіть функцію, яка приймає масив рядків і повертає
// новий масив, в якому всі рядки зберігаються, але в зворотньому порядку.

// function giveNewArrWithUpperCase(string){
//     return string.map(str => str.split("").reverse().join(""));
//     };
//     const arrStr = ["js", "html", "css", "react", "angular"];
//     console.log(giveNewArrWithUpperCase(arrStr));
    

// 3. Створіть функцію, яка приймає масив об'єктів і повертає новий масив,
//  в якому кожен об'єкт має додаткове поле з певним значенням.

// function addNewFieldToObj(arrObj){
// return arrObj.map(obj => {
//     obj.city = "Kyiv"
//     return obj;
// });
    
// };
// function addNewFieldToObj(arrObj){
//     return arrObj.map(user_obj => {
//         //some code
//         if(user_obj.age > 25){
//             return {...user_obj, city: "Kyiv"};
//         }
//         return user_obj;
//     })
// };
// const newArr = [
//     {name: "Masha", age: 25},
//     {name: "Dima", age: 29},
//     {name: "Sasha", age: 21},
//     {name: "Anton", age: 44},
// ];
// console.log(addNewFieldToObj(newArr));
//  const bookEl = document.querySelector(".book");
//  bookEl.addEventListener("click", event => {
//     console.log("Заброньовано!");
//     console.log(addNewFieldToObj(newArr));
//  })

//let test_arr = [...newArr]; //shalowCopy
// let test_arr = structuredClone([...newArr]);//deepCopy
// test_arr[0].age = '9999';
// console.log('newArr',newArr);
// console.log('test_arr',test_arr);
// let arr_test = [1,2,3];
// let int_arr = [4,5,6,7];
// arr_test = [...arr_test, ...int_arr] // => [4,5,6,7]


// 6. Напишіть функцію, яка приймає масив об'єктів і рядок,
//  і повертає новий масив, в якому включені тільки об'єкти,
//   які містять цей рядок в одному зі своїх полів.
// function getArrOfObjectsWichContainString(arr, str){
// return arr.filter(obj =>{
// //  {name: "Masha", age: 25, city: "Kyiv"}
//     for (const key in  obj) {
//         if(obj[key] === str) return true
//     }
// })
// };
// const newArrObjArr = [
//     {name: "Masha", age: 25, city: "Kyiv"},
//     {name: "Dima", age: 29, city: "Odessa"},
//     {name: "Alisa", age: 25, city: "Dnepr"},
//     {name: "Pasha", age: 29, city: "Hello"},
//     {name: "Melisa", age: 25, city: "Lviv"},
//     {name: "Kate", age: 29, city: "Luzk"},
// ];
// const str = "Hello";
// console.log(getArrOfObjectsWichContainString(newArrObjArr,ageForFilter));
// function getArrOfObjectsWichContainString(arr, ageForFilter){
//     return arr.filter(obj =>  obj.age >= ageForFilter)
//     /*
//         if(obj.age >= 26){
//             return obj
//         }else{
//             return null
//         }
//     */
//     };
//     const newArrObjArr = [
//         {name: "Masha", age: 25, city: "Kyiv"},
//         {name: "Dima", age: 29, city: "Odessa"},
//         {name: "Alisa", age: 25, city: "Dnepr"},
//         {name: "Pasha", age: 29, city: "Hello"},
//         {name: "Melisa", age: 25, city: "Lviv"},
//         {name: "Kate", age: 29, city: "Luzk"},
//     ];
//     const ageForFilter = 26;
//     console.log(getArrOfObjectsWichContainString(newArrObjArr,ageForFilter));

// 8. Напишіть функцію, яка приймає масив рядків і
// повертає новий масив, в якому всі рядки скорочені до першої літери.

// function getArrayStringShorteningtoFirstLetter(arr){
//     return arr.map(arr_str => arr_str[0]);

// };
// const arrString = ["Hello", "React", "Angular", "HTML",];
// console.log(getArrayStringShorteningtoFirstLetter(arrString));


