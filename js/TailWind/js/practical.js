// 1. Створіть кнопку з текстом "Змінити колір". При кліку на цю кнопку змініть колір фону сторінки на синій.
// const buttonnEl = document.querySelector(".buttonn");
// buttonnEl.addEventListener("click", event => {
//     buttonnEl.style.backgroundColor = "tomato";
//     document.body.style.backgroundColor = "blue";
// });


// 2. Створіть абзац з текстом "Наведіть на мене". При наведенні миші на цей абзац змініть його текстовий колір на червоний.
// const paragraphEl = document.querySelector(".paragraph")
// paragraphEl.addEventListener("mouseover", event => {
//     paragraphEl.style.color = "red";
// })
// 3. Створіть кнопку з текстом "Збільшити текст". При кліку на цю кнопку збільшіть розмір шрифту абзацу на сторінці.
// const buttonnEl = document.querySelector(".buttonn");
//  const paragraphEl = document.querySelector(".paragraph")
// buttonnEl.addEventListener("click", event => {
//     paragraphEl.style.fontSize = "30px"
// });
// 4. Створіть кнопку з текстом "Заховати текст". При кліку на цю кнопку приховайте абзац на сторінці.
// 5. Створіть абзац з текстом "Клікніть тут". При кліку на цей абзац змініть його фон на жовтий.
// 6. Створіть поле вводу тексту та кнопку "Змінити фон". При введенні тексту в поле та кліку на кнопку змініть колір фону поля вводу на зелений.
// 7. Створіть зображення та кнопку "Приховати зображення". При кліку на кнопку приховайте зображення.
// 8. Створіть список з кількома пунктами та кнопку "Змінити стиль списку". При кліку на кнопку змініть стиль пунктів списку (наприклад, колір або шрифт).
// 9. Створіть кнопку з текстом "Змінити колір тексту". При кліку на цю кнопку змініть колір тексту всіх абзаців на сторінці на оранжевий.
// 10. Створіть кнопку з текстом "Показати/приховати". При кліку на цю кнопку перемикайте видимість певного елементу на сторінці (наприклад, абзацу або зображення).



// // 1. Створіть об'єкт person з властивостями name, age та city.
//  Використовуйте деструктуризацію, щоб витягти ці властивості в окремі змінні.
// const person = {
//     name: "Oleh",
//     age: 33,
//     city: "Lviv"
// };
// const { name, age, city } = person;
// console.log(name);
// console.log(age);
// console.log(city);
////////////////////////////////////////////////////
// // 2. Створіть масив colors з трьома елементами.
//  Використовуйте деструктуризацію, щоб витягти перший і третій елементи в окремі змінні.
// const colors = ["blue", "ocean", "violet"];
// const [firstColor, thirdColor] = colors;
// console.log(firstColor);
// console.log(thirdColor);
////////////////////////////////////////////////////
// // 3. Створіть об'єкт car з властивостями make, model, year та color.
//  Використовуйте деструктуризацію, щоб витягти make і model в окремі змінні.
// const car = {
//     make: "BMW",
//     model: "X5",
//     year: 2016,
//     color: "red"
// };
// const {make, model} = car;
// console.log(make);
// console.log(model);
////////////////////////////////////////////////////
// // 4. Створіть масив numbers з п'яти чисел.
//  Використовуйте деструктуризацію, щоб витягти перше число в змінну first, а решту чисел в масив rest.
// const numbers = [1, 2, 3, 4, 5];
// const [first, ...rest] = numbers;
// console.log(first);
// console.log(...rest);
////////////////////////////////////////////////////
// // 5. Створіть об'єкт user з вкладеним об'єктом address, який містить властивості street, city та zip.
//  Використовуйте деструктуризацію, щоб витягти street і city в окремі змінні.
// const user = {
//     name: " Anton",
//     age: 32,
//     address: {
//         street: "Shevchenka 114",
//         city: "Kyiv",
//         zip: 13001
//     },
// };
// const { name, age, address: { street, city, zip }, } = user;
// console.log(name);
// console.log(age);
// console.log(street);
// console.log(city);
// console.log(zip);
////////////////////////////////////////////////////
// // 6. Створіть об'єкт book з властивостями title, author, year та publisher.
//  Використовуйте деструктуризацію з параметрами за замовчуванням, щоб витягти title і year в окремі змінні,
//  при цьому year має мати значення за замовчуванням 2023.

// const book = {
//     title: "House of Hucci",
//     author: "Sara Gay Forden",
//     year: 2021,
//     publisher: "Fabula #PRO"
// };
// const { title, year = 2023 } = book;
// console.log(title);
// console.log(year);
////////////////////////////////////
// // 7. Створіть функцію, яка приймає об'єкт options з властивостями width, height та color.
//  Використовуйте деструктуризацію в параметрах функції, щоб витягти ці властивості.
// function getoptions({ width, height, color }) {
//     console.log(`Width: ${width}, Height: ${height}, Color: ${color}`);
// };
// getoptions({
//     width: 150,
//     height: 300,
//     color: "tomato"
// });
// // 8. Створіть масив coords з двома вкладеними масивами, що представляють координати точок на площині.
//  Використовуйте деструктуризацію, щоб витягти координати першої точки в змінні x1 і y1, а другої точки в змінні x2 і y2.
// const coords = [
//     [102, 105],
//     [104, 108]
// ];
// const [[x1, y1], [x2, y2]] = coords;
// console.log(`Перша точка x = ${x1}, y = ${y1}`);
// console.log(`Друга точка x = ${x2}, y = ${y2}`);
// // 9. Створіть об'єкт settings з вкладеним об'єктом theme, який містить властивості primary та secondary.
//  Використовуйте деструктуризацію, щоб витягти primary в окрему змінну.
// const settings = {
//     theme: {
//         primary: 105,
//         secondary: 106
//     }
// };
// const { theme: { primary } } = settings;
// console.log(primary);
// // 10. Створіть функцію, яка приймає масив з двома елементами: username та email.
//  Використовуйте деструктуризацію в параметрах функції, щоб витягти ці елементи.
// function getArr([username, email]) {
//     console.log(username, email);
// };
// getArr(["Ivan Ivanov", "Ivanov1970@gmail.com"]);