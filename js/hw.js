// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує
// лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.


// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
// class Storage {
//     #items;
//     constructor(initialItems){
//     this.#items = initialItems;
//     }
//     getItems(){
//         return this.#items;
//     }
//     addItem(newItem){
//         this.#items.push(newItem)
//     }
//     removeItem(itemToRemove){
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// };


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/////////////////////////

// Напиши клас StringBuilder, який приймає один параметр initialValue —
// довільний рядок, який записується у приватну властивість value об'єкта, що створюється.
// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
// class StringBuilder{
//     #value;
//     constructor(initialValue){
//     this.#value = initialValue;
//     }
//     getValue(){
//         return this.#value;
//     }
//     padEnd(str){
//         this.#value += str;

//     }
//     padStart(str){
//         this.#value = str + this.#value;
//     }
//     padBoth(str){
//         this.#value = str + this.#value + str;
//     }
// };
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// 1. Знайдіть всіх користувачів у масиві об'єктів, які мають вік більше 18 років.
// function searchHighAge(arr_obj) {
//     return arr_obj.filter((user_obj) => user_obj.age > 18);
// };
// const newArr = [
//     {name: "Masha", age: 25},
//     {name: "Dima", age: 29},
//     {name: "Sasha", age: 18},
//     {name: "Anton", age: 44},
// ];
// console.log(searchHighAge(newArr));

// 2. Отримайте список об'єктів у масиві, які мають властивість "статус" зі значенням "активний".
// function searchActiveUser(arr_obj) {
//     return arr_obj.filter((arr) => arr.status === "active");
// };
// const newArr = [
//     {name: "Masha", age: 25, status: "not-active"},
//     {name: "Dima", age: 29, status: "active"},
//     {name: "Sasha", age: 18, status: "not-active"},
//     {name: "Anton", age: 44, status: "active"},
// ];
// console.log(searchActiveUser(newArr));

// 3. Обчисліть загальну суму вартості усіх товарів у масиві об'єктів, де кожен об'єкт містить властивість "ціна".
// function sumArrObjPrice(arr_obj) {
//     return arr_obj.reduce((sum, obj) => {
//         console.log(sum);
//        return sum + obj.price;
//     }, 0);
// };
// const newArr = [
//     {brand: "BMW", price: 30000},
//     {brand: "Audi", price:  25000},
//     {brand: "Ford", price:  15000},
//     {brand: "Kia", price:  44000},
// ];
// console.log(sumArrObjPrice(newArr));
 

// 4. Знайдіть перший об'єкт у масиві, в якому властивість "назва" має значення "продукт".

// function searchProduct(arr_obj) {
//     return arr_obj.find((arr) => arr.price === "product");
// };
// const newArr = [
//     {brand: "BMW", price: "product"},
//     {brand: "Audi", price:  25000},
//     {brand: "Ford", price: "product"},
//     {brand: "Kia", price: 44000 },
// ];
// console.log(searchProduct(newArr));

// 5. Створіть новий масив об'єктів, де значення кожної властивості буде збільшено на 10%.
// 6. Отримайте список об'єктів у масиві, в яких властивість "кількість" більше 5.
// 7. Обчисліть середнє значення властивості "оцінка" у масиві об'єктів.

// function getAverageScoreValue(arr_obj) {
//     return arr_obj.reduce((sum, obj) =>  sum += obj.score, 0)/arr_obj.length //сумма  = 30/3 => 3 = arr_obj.length
// };

// const CustomButton:FC<ICustomButton> = ({
//     id,
//     title,
//     onClickHandler,
//     disabled,
//     className,
//     activeStyles,
// }) => {
//     return (
//         <button
//             id={id}
//             disabled={disabled}
//             onClick={onClickHandler}
//             className={className}
//             styles={{isActive ? activeStyles : ""}}
//         >
//             {title}
//         </button>
//     )
// }

// props = {
//     id: 'test',
//     className: 'mt-10'
// }

// const CustomButton:FC<ICustomButton> = (props) => {
//     return (
//         <button
//             id={props.id}
//             disabled={props.disabled}
//             onClick={props.onClickHandler}
//             className={props.className}
//         >
//             {props.title}
//         </button>
//     )
// }

// let user = [
//     { since: "biology", score: 10 },
//     { since: "algebra", score: 9 },
//     { since: "geometry", score: 11 },
// ];
// console.log(getAverageScoreValue(user));



// {/* <CustomButton
//     id='test'
//     title="Click me!"
//     onClickHandler={()=>{console.log('Hello')}}
//     disabled={false}
//     className="mt-10 text-[50px] font-bold underline text-blue-500"
//     activeStyles="shadow-md"
// // /> */}


// 8. Знайдіть перший об'єкт у масиві, де властивість "категорія" містить підстроку "електроніка".

// function getObj(arr_obj) {
//     return arr_obj.find(product => {
//         product.category.includes("електроніка")
//     });
// };
// const products = [
//   { name: "Phone", category: "електроніка"},
//   { name: "AirPods", category: "комп'ютери"},
//   { name: "TV", category: "електроніка"},
//   { name: "Tablet", category: "електроніка"},
//   { name: "Mouse", category: "комп'ютерні аксесуари"},
// ];
// console.log(getObj(products));


// 9. Створіть новий масив, в якому кожний об'єкт містить властивість "прізвище" зі значенням, яке є об'єднанням властивостей "ім'я" та "прізвище".
// 10. Отримайте список об'єктів у масиві, де властивість "доступність" має значення true.

// 1. Створіть кнопку з текстом "Натисніть мене" і додайте подію "click", яка виводить повідомлення в консоль при натисканні кнопки.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     console.log("Кнопку було натиснуто!!!");
// });
 

// 2. Створіть поле введення тексту і додайте подію "input", яка виводить у консоль поточний вміст поля при зміні введеного тексту.
// const inputEl = document.querySelector("#test_inp");
// inputEl.addEventListener('blur', event => {
//     // console.log(event.target.value);
//     let input_value = event.target.value;
//     event.target.value = "";
//     setTimeout(()=>{
//         alert(input_value);
//     },100)
   
// });

// 3. Створіть список з декількома пунктами. Додайте подію "mouseover" на кожен пункт списку,
//  яка змінює колір тексту пункту при наведенні на нього.

// const ul_listEL = document.querySelector(".li_item");
// ul_listEL.onclick = function (event) {
//     console.log(event);
// // }
// let color_arr = ['red', 'blue', 'green', 'yelow', 'gray'];
// let list_items = document.querySelectorAll(".li_item");//[li,li,li,li]

// list_items.forEach(list_item => list_item.onmouseover = function(){
//     // list_item.style.color = color_arr[Math.floor(Math.random()*color_arr.length)]
//     // setInterval(()=>{
//     //     list_item.style.color = color_arr[Math.floor(Math.random()*color_arr.length)]
//     // },2000)
// })

// const ul_listEL = document.querySelector(".ul_list");
// ul_listEL.onmouseover = function (event) {
//     console.log(event.target.className);
//     if(event.target.className === 'li_item'){//якщо ми навели мишку на тег li
//         event.target.style.color = color_arr[Math.floor(Math.random()*color_arr.length)];
//     }
// }

// 4. Створіть форму з кнопкою "Надіслати". Додайте подію "submit" на форму, яка перешкоджає стандартному поведінці форми та виводить у консоль дані, які ввів користувач перед відправкою форми.

// 5. Створіть блок з текстом і додайте подію "dblclick",
//  яка змінює стиль тексту(наприклад, робить його жирним) при подвійному кліку на блок.
// const textEl = document.getElementById("text");
// textEl.ondblclick = function (event) {
//     textEl.style.fontWeight = "900";
// }


// 6. Створіть зображення та додайте подію "load", яка виводить повідомлення в консоль після завантаження зображення.
// const photoEl = document.getElementById("photo");
// photoEl.onload = function () {
//     console.log("Фото завантажено!");
// }

// 7. Створіть анімовану кнопку, яка змінює свій колір при натисканні на неї, а потім змінюється назад через деякий час.

// const buttonEl = document.querySelector(".button_elem");
// buttonEl.onclick = function () {
//     console.log("hfuehfuheufh");
//      setInterval(()=>{
//         buttonEl.style.color = "pink";
//     }, 2000)
//     setTimeout(()=>{
//         buttonEl.style.color = "orange";
//     }, 4000)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Створіть блок тексту та додайте подію "contextmenu", яка відкриває контекстне меню з деякими опціями при правому кліку на блок.
// const textEl = document.getElementById("text");
// textEl.addEventListener("contextmenu", event => {
//     console.log("Кнопка була натиснута!!!!");
// });
//////////////////////////////////////////////////////////////////////////////
// 9. Створіть список посилань і додайте подію "mouseenter" на кожне посилання, яка змінює колір фону посилання при наведенні на нього.
// let color_arr = ['red', 'blue', 'green', 'yellow', 'gray'];
// const linkEl = document.querySelectorAll(".link");
// linkEl.forEach(linkElem => linkElem.addEventListener("mouseenter", event => {
//  linkElem.style.color = color_arr[Math.floor(Math.random() * color_arr.length)];
// console.log("Колір змінений!!!!");
// }));
//////////////////////////////////////////////////////////////////////////////

// 10. Створіть таймер, який робить щось (наприклад, виводить повідомлення в консоль) кожні 5 секунд.
//////////////////////////////////////////////////////////////////////////////
// setInterval(() => {
//     console.log("Hello Dima");
// }, 5000);
//////////////////////////////////////////////////////////////////////////////
// 1. Створіть кнопку з текстом "Натисніть мене" і додайте подію "click", яка змінює колір фону кнопки на червоний при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.backgroundColor = "red"
//     console.log("Колір змінено на червоний!!!");
// });
//////////////////////////////////////////////////////////////////////////////
// 2. Створіть кнопку з текстом "Клацніть тут" і додайте подію "click", яка змінює колір тексту кнопки на зелений при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.color = "green"
//     console.log("Колір змінено на зелений!!!");
// });
//////////////////////////////////////////////////////////////////////////////
// 3. Створіть кнопку з текстом "Натисніть" і додайте подію "click", яка змінює розмір шрифту кнопки на 20 пікселів при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.fontSize = "20px"
//     console.log("Розмір кнопки змінений на 20 пікселів!!!");
// });
//////////////////////////////////////////////////////////////////////////////
// 4. Створіть кнопку з текстом "Клацніть тут" і додайте подію "click", яка змінює рамку кнопки на товсту червону лінію при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.border = "5px solid red"
//     console.log("Рамка кнопки змінена на товсту червону лінію!!!");
// });
//////////////////////////////////////////////////////////////////////////////
// 5. Створіть кнопку з текстом "Натисніть мене" і додайте подію "click", яка змінює фон кнопки на випадковий колір при кожному натисканні.
// const arrClr = ["red", "blue", "orange", "yellow", "grey", "pink", "black", "green", "tomato", "violet", "ocean"];
// const buttonEl = document.querySelectorAll(".button_elem");
// buttonEl.forEach(button => button.addEventListener("click", event => {
//     button.style.color = arrClr[Math.floor(Math.random() * arrClr.length)];
//     console.log("Випадковий колір", button.style.color);
// }));
//////////////////////////////////////////////////////////////////////////////
// 6. Створіть кнопку з текстом "Клацніть тут" і додайте подію "click", яка змінює прозорість кнопки на 0.5 при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.opacity = 0.5;
//     console.log("Прозорість змінена на 0.5!!!")});
//////////////////////////////////////////////////////////////////////////////
// 7. Створіть кнопку з текстом "Натисніть" і додайте подію "click", яка змінює ширину кнопки на 200 пікселів при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.width = "200px";
//     console.log("Ширина змінена на 200 пікселів!!!")});
//////////////////////////////////////////////////////////////////////////////
// 8. Створіть кнопку з текстом "Клацніть тут" і додайте подію "click", яка змінює висоту кнопки на 50 пікселів при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.height = "50px";
//     console.log("Висота змінена на 50 пікселів!!!")});
//////////////////////////////////////////////////////////////////////////////
// 9. Створіть кнопку з текстом "Натисніть мене" і додайте подію "click", яка змінює форму кнопки на круглу при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.height = "100px";
//     buttonEl.style.width = "100px";
//       buttonEl.style.borderRadius = "50%";
//     console.log("Кнопка змінена на круглу!!!")});
//////////////////////////////////////////////////////////////////////////////
// 10. Створіть кнопку з текстом "Клацніть тут" і додайте подію "click", яка змінює тінь кнопки на зазначену при натисканні.
// const buttonEl = document.querySelector(".button_elem");
// buttonEl.addEventListener("click", event => {
//     buttonEl.style.boxShadow = "3px 3px 3px 4px";
//     console.log("Висота змінена на 50 пікселів!!!")});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////