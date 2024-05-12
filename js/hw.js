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

function getAverageScoreValue(arr_obj) {
    return arr_obj.reduce((sum, obj) =>  sum += obj.score, 0)/arr_obj.length //сумма  = 30/3 => 3 = arr_obj.length
};

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

props = {
    id: 'test',
    className: 'mt-10'
}

const CustomButton:FC<ICustomButton> = (props) => {
    return (
        <button
            id={props.id}
            disabled={props.disabled}
            onClick={props.onClickHandler}
            className={props.className}
        >
            {props.title}
        </button>
    )
}

let user = [
    { since: "biology", score: 10 },
    { since: "algebra", score: 9 },
    { since: "geometry", score: 11 },
// ];
// console.log(getAverageScoreValue(user));

// 8. Знайдіть перший об'єкт у масиві, де властивість "категорія" містить підстроку "електроніка".
// 9. Створіть новий масив, в якому кожний об'єкт містить властивість "прізвище" зі значенням, яке є об'єднанням властивостей "ім'я" та "прізвище".
// 10. Отримайте список об'єктів у масиві, де властивість "доступність" має значення true.



<CustomButton 
    id='test'
    title="Click me!"
    onClickHandler={()=>{console.log('Hello')}}
    disabled={false}
    className="mt-10 text-[50px] font-bold underline text-blue-500"
    activeStyles="shadow-md"
/>