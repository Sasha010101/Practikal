// Завдання на математичні оператори + if/else

// 1. Перевірити, чи число більше за 5, і вивести "Число більше за 5" або "Число не більше за 5" у консоль.
// function numbers(item) {
//   let number = 5;
//   if(item > number) {
//   console.log("Число більше ніж змінна!!!")
// } 
// else {
//   console.log("Число менше за змінну!!!");
// }
// }
// numbers(7);
// numbers(2);
// numbers(11);
// numbers(3);

// 2. Перевірити, чи число менше за 100, і вивести "Число менше за 100" або "Число не менше за 100" у консоль.
// function numbers(item) {
//   let number = 100;
//   if(item < number) {
//   console.log("Число меньше ніж 100!!!")
// } 
// else {
//   console.log("Число більше за 100!!!");
// }
// }
// numbers(160);
// numbers(56);
// numbers(51);
// numbers(144);

// 3. Перевірити, чи число дорівнює 0, і вивести "Число дорівнює 0" або "Число не дорівнює 0" у консоль.
// const numbers = 0;
// if(numbers === 0) {
//   console.log("Number = 0");
// } else {
//   console.log("Число не дорівнює 0");
// }
// 4. Перевірити, чи число парне, і вивести "Число парне" або "Число не парне" у консоль.
// function number(item) {
//   if(item % 2 === 0){
//   console.log("Число парне");
// }
// else{
//   console.log("число непарне");
// }
// }
// number(6);
// number(3);
// number(1);
// number(8);
// number(9);
// 5. Перевірити, чи число кратне 3, і вивести "Число кратне 3" або "Число не кратне 3" у консоль.
// function checkNumber(item){
// if(item % 3 === 0) {
//   console.log("Число кратне 3");
// }
// else {
//   console.log("Число не кратне 3");
// }
// }
// checkNumber(6);
// checkNumber(23);
// checkNumber(24);
// checkNumber(8);
// checkNumber(9);
// 6. Перевірити, чи число є додатнім, і вивести "Число додатнє" або "Число не додатнє" у консоль.
// function checkNumber(item){
//   if(item > 0) {
//     console.log("Число є додатнім");
//   }
//   else if(item === 0) {
// console.log("Число не додатнє та не відʼємне");
//   }
//   else{
//     console.log("Число не є дотатнє");
//   }
// }
// checkNumber(6);
// checkNumber(0);
// checkNumber(2);
// checkNumber(-5);
// checkNumber(6);
// checkNumber(-8);
// 7. Перевірити, чи число є від'ємним, і вивести "Число від'ємне" або "Число не від'ємне" у консоль.
//  function checkNumber(item){
//   if(item < 0) {
//     console.log("Число є відʼємним");
//   }
//   else if(item === 0) {
// console.log("Число не додатнє та не відʼємне");
//   }
//   else{
//     console.log("Число є додатнім");
//   }
// }
// checkNumber(-6);
// checkNumber(0);
// checkNumber(2);
// checkNumber(-5);
// checkNumber(6);
// checkNumber(-8);

// 8. Перевірити, чи число належить діапазону від 10 до 50, і вивести "Число належить діапазону" або "Число не належить діапазону" у консоль.
// function numbers(item) {
//   if(item > 10 && item < 50) {
//     console.log("Число належить діапазону");
//   }
//   else {
//     console.log("Число не належить діапазону");
//   }
// }
// numbers(55);
// numbers(44);
// numbers(23);
// numbers(9);
// numbers(49);
// 9. Перевірити, чи сума двох чисел більша за 100, і вивести суму у консоль.
// function checkNumber(number, number1) {
//   let sum = number + number1;
//   if(sum > 100) {
//     console.log("Число більше за 100");
//   }
//   else{
//     console.log("Число меньше за 100");
//   }
// }
// checkNumber(50, 75);
// checkNumber(44, 33);
// checkNumber(50, 51);
// checkNumber(50, 42);
// checkNumber(33, 76);
// 10. Перевірити, чи добуток двох чисел менший за 500, і вивести добуток у консоль.
// function checkNumber(number, number1) {
//   let sum = number * number1;
//   if(sum < 500) {
//     console.log("Добуток меньший за 500:", sum);
//   }
//   else{
//     console.log("Добуток більший за 500:", sum);
//   }
// }
// checkNumber(30, 25);
// checkNumber(25, 20);
// checkNumber(17, 10);
// checkNumber(250, 3);
// checkNumber(125, 5);


// 11. Перевірити, чи сума двох чисел менше або рівна 50, і вивести суму у консоль.

// function checkNumber(number, number1) {
//   let sum = number + number1;
//   if(sum <= 50) {
//     console.log("Cума менша або дорівнює 50:", sum);
//   }
//   else{
//     console.log("Сума більша за 50:", sum);
//   }
// }
// checkNumber(30, 25);
// checkNumber(25, 20);
// checkNumber(17, 10);
// checkNumber(48, 2);
// checkNumber(42, 5);

// 12. Перевірити, чи добуток двох чисел дорівнює 100, і вивести добуток у консоль.
// function checkNumber(number, number1) {
//   let sum = number * number1;
//   if(sum === 100) {
//     console.log("Добуток дорівнює  100:", sum);
//   }
//   else{
//     console.log("Добуток мешьше 100:", sum);
//   }
// }
// checkNumber(30, 2);
// checkNumber(25, 4);
// checkNumber(17, 10);
// checkNumber(48, 2);
// checkNumber(20, 5);


// 13. Перевірити, чи перше число більше другого на 10 одиниць, і вивести "Так" або "Ні" у консоль.
// function numbers(num1, num2) {
// if(num1 - num2 >= 10) {
//   console.log("Так");
// }
// else {
//   console.log("Ні");
// }
// }
// numbers(15, 5);
// numbers(14, 5);
// numbers(20, 10);
// numbers(30, 8);
// numbers(25, 20);
// numbers(44, 33);

// 14. Перевірити, чи друге число менше першого на 20 одиниць, і вивести "Так" або "Ні" у консоль.
// function numbers(num1, num2) {
//   if(num1 - num2 < 20) {
//     console.log("Так");
//   }
//   else {
//     console.log("Ні");
//   }
//   }
//   numbers(26, 5);
//   numbers(34, 15);
//   numbers(55, 34);
//   numbers(39, 8);
//   numbers(55, 20);
//   numbers(44, 33);
  
// 15. Перевірити, чи сума двох чисел є непарним числом, і вивести "Так" або "Ні" у консоль.
// function checkNumber(num1, num2) {
//   let sum = num1 + num2;
//   if(sum % 2 !== 0) {
//     console.log("Так");
//   }
//   else {
//     console.log("Ні");
//   }
// }
//  checkNumber(3, 5);
//  checkNumber(2, 3);
//  checkNumber(34, 24);
//  checkNumber(44, 43);
//  checkNumber(50, 2);
// 16. Перевірити, чи добуток двох чисел дорівнює сумі цих чисел, і вивести "Так" або "Ні" у консоль.
// function checkSum(num1, num2){
//   let sum = num1 * num2;
//   let sum1= num1 + num2;
//   if(sum === sum1){
//     console.log(" Так");
//   }
//   else{
//     console.log("Ні");
//   }
// }
// checkSum(0, 0);
// checkSum(3, 2);
// checkSum(2, 2);
// checkSum(4, 4);

// 17. Перевірити, чи кожне з чисел більше за 10, і вивести "Так" або "Ні" у консоль.
// function numbers(num1, num2) {
//   if(num1 > 10 && num2 > 10) {
//     console.log("Так");
//   }
//   else {
//     console.log("Ні");
//   }
  
// }
// numbers(11, 12);
// numbers(9, 8);
// numbers(15, 11);
// numbers(3, 11);
// numbers(3, 7);

// 18. Перевірити, чи хоча б одне з чисел менше або рівне 5, і вивести "Так" або "Ні" у консоль.
// function checkNumbers(num1, num2){
//   if(num1 <= 5 || num2 <= 5){
//     console.log("Так");
//   }
//   else{
//     console.log("Ні");
//   }
// }
// checkNumbers(3, 5);
// checkNumbers(5, 6);
// checkNumbers(6, 12);
// checkNumbers(4, 5);
// checkNumbers(6, 7);

// 19. Перевірити, чи сума першого та другого числа дорівнює остачі від ділення першого числа на друге, і вивести "Так" або "Ні" у консоль.
// function checkNumbers(num1, num2){
//   let sum = num1 + num2;
//   let devider = num1 % num2;
//   if(sum === devider) {
//     console.log("Так");
//   }
//   else {
//     console.log("Ні");
//   }
// }
// checkNumbers(4, 4);
// checkNumbers(8, 4);
// checkNumbers(16, 7);
// checkNumbers(20, 4);

// 20. Перевірити, чи різниця між першим та другим числом є парним числом, і вивести "Так" або "Ні" у консоль.

// function numbers(num1, num2){
//   let numbers1 = num1 - num2;
//   if(numbers1 % 2 === 0) {
//     console.log("Так");
//   }
//   else {
//   console.log("Ні");
// }
// }
// numbers(6, 5);
// numbers(4, 0);
// numbers(6, 3);
// numbers(8, 4);
// Завдання на строкові методи + трохи нових які ми не повторили вчора)

// 1. Перевірити, чи рядок містить підрядок "hello", і вивести "Знайдено" або "Не знайдено" у консоль.
// function checkString(str){
//   if(str.includes("hello")) {
// console.log("Знайдено");
//   }
//   else {
//     console.log("Не знайдено");
//   }
// }
// checkString("Hello world");
// checkString("hello world");
// checkString("heLlo world");
// checkString("world hello");
// 2. Перевірити, чи рядок містить підрядок "world", і вивести "Знайдено" або "Не знайдено" у консоль.
// function checkString(str){
//     if(str.includes("world")) {
//   console.log("Знайдено");
//     }
//     else {
//       console.log("Не знайдено");
//     }
//   }
//   checkString("Hello world");
//   checkString("hello wOrld");
//   checkString("heLlo woRld");
//   checkString("world Hello");

// 3. Перевірити, чи рядок починається з літери "H", і вивести "Починається" або "Не починається" у консоль.
// function checkString(str){
//   if(str[0] === "Н"){
//     console.log("Починається");
//   }
//   else{
//     console.log("Не починається");
//   }
// }
// checkString("наша Ряба");
// checkString("Ряба Наша");
// checkString("Наша ряба");


// 4. Перевірити, чи рядок закінчується на літеру "d", і вивести "Закінчується" або "Не закінчується" у консоль.
// function checkString(str) {
//   if(str[str.length -1] === "d"){
//     console.log("Закінчується");
//   }
//   else{
//     console.log("Не закінчується");
//   }
// }
// checkString("BreD");
// checkString("bred");
// checkString("Dred");

// 5. Перевірити, чи довжина рядка більше за 10 символів, і вивести "Більше" або "Не більше" у консоль.
// function checkLine(str) {
//   if(str.length > 10) {
//     console.log("Більше");
//   }
//   else{
//     console.log("Не Більше");
//   }
// }
// checkLine("Hello world");
// checkLine("Mouse");
// checkLine(`Good morning world`);
// checkLine("Hello");

// 6. Перевірити, чи рядок містить цифру "7", і вивести "Знайдено" або "Не знайдено" у консоль.
// function checkString(str) {
//   if(str.includes(7)){
//     console.log("Знайдено");
//   }
//   else{
//     console.log("Не знайдено");
//   }
// }
// checkString("Hel7lo world");
// checkString("uhfeujf8den");
// checkString("frtwduded7ue");
// checkString("edeid3jk");

// 7. Перевірити, чи позиція першого входження літери "e" у рядку дорівнює 3, і вивести "спрацював if" або "спрацював else" у консоль.
// function checkLetter(str) {
//   if(str[3] === "e") {
// console.log("спрацював");
//   }
//   else {
//     console.log("не спрацював");
//   }
// }
// checkLetter("Later");
// checkLetter("Hello");
// checkLetter("wydewydg");
// checkLetter("finger");
// 9. Перевірити, чи останній символ рядка є пробілом, і вивести "спрацював if" або "спрацював else" у консоль.
// function checkString(str) {
//     if(str[str.length -1 ] === " ") {
//   console.log("спрацював");
//     }
//     else {
//       console.log("не спрацював");
//     }
//   }
//   checkString("Later");
//   checkString("Hello ");
//   checkString("wydewydg");
//   checkString("finger ");

// 12. Перевірити, чи рядок починається зі слова "JavaScript", і вивести "Починається" або "Не починається" у консоль.
// function checkString(str) {
//       if(str.startsWith("JavaScript")) {
//     console.log("Починається");
//       }
//       else {
//         console.log("Не починається");
//       }
//     }
//     checkString("LaterJavaScript");
//     checkString("JavaScriptHello");
//     checkString("JavaScriptwydewydg");
//     checkString("fingerJavaScript");

// 13. Перевірити, чи рядок містить символи "&" або "$", і вивести "Знайдено" або "Не знайдено" у консоль.
// function checkString(str) {
//     if(str.includes("&") || str.includes("$")){
//       console.log("Знайдено");
//     }
//     else{
//       console.log("Не знайдено");
//     }
//   }
//   checkString("Hel7lo wo&rld");
//   checkString("uhfeujf8den");
//   checkString("frtwd$uded7ue");
//   checkString("edeid3jk");


// 14. Перевірити, чи рядок містить лише пропуски, і вивести "спрацював if" або "спрацював else" у консоль.
// function checkString(str) {
//   if(str.trim()) {
//     console.log("спрацював if");
//   }
//   else{
//     console.log("спрацював else");
//   }
// }
// checkString("Helloworld");
// checkString("Hello world");
// checkString("Hello world ");
// checkString("Hello  world");
// checkString("hiworld");
// 15. Перевірити, чи позиція першого входження літери "A" у рядку менше за 5, і вивести "спрацював if" або "спрацював else" у консоль.
// function checkLetter(str) {
//   if(str.indexOf("A") < 5) {
//     console.log("спрацював if");
//   }
//   else {
//     console.log("спрацював else");
//   }
// }
// checkLetter("Sugar");
// checkLetter("Canada");
// checkLetter("world");
// checkLetter("constructor");
// 16. Перевірити, чи рядок містить лише малі літери, і вивести "спрацював if" або "спрацював else" у консоль.
// const string = "Hello world"
// if(string === string.toLowerCase()) {
//   console.log("спрацював if");
// }
// else {
//   console.log("спрацював else");
// }

// 17. Перевірити, чи рядок містить лише великі літери, і вивести "спрацював if" або "спрацював else" у консоль.
// const string = "HELLO WORLD"
// if(string === string.toUpperCase()) {
//   console.log("спрацював if");
// }
// else {
//   console.log("спрацював else");
// }
// 18. Перевірити, чи рядок містить підрядок "lo" від позиції 3 до 5 (включно), і вивести "Знайдено" або "Не знайдено" у консоль.
// function checkString(str) {
//   const subString = str.slice(3, 6);
//   if(subString === "lo") {
//     console.log("Знайдено");
//   }
//   else {
//     console.log("Не знайдено");
//   }
  
// }
// checkString("Hello world");
// checkString("Helo world");

// 19. Перевірити, чи позиція останнього входження літери "o" у рядку дорівнює останній позиції, і вивести "спрацював if" або "спрацював else" у консоль.

// 20. Перевірити, чи рядок містить символи "&" і "!", і вивести "Знайдено" або "Не знайдено" у консоль.
// function checkString(str) {
//       if(str.includes("&") || str.includes("!")){
//         console.log("Знайдено");
//       }
//       else{
//         console.log("Не знайдено");
//       }
//     }
//     checkString("Hel7lowo&rld");
//     checkString("uhfeuj!f8den");
//     checkString("frtwduded7ue");
    // checkString("edeid3jk");
    //                                                  ///////////////МАСИВИ......///////////////
// Ось кілька завдань на масиви , цикли та умови)

// 1. Створіть масив чисел. Виведіть у консоль суму всіх парних чисел у масиві.
// const numbers = [1, 35, 44, 23, 56, 80];
// let sum = 0;
// for(let number of numbers){
//     if(number % 2 === 0){
//         sum += number;
//     }
// }
// console.log("Cума всіх чисел:" + sum);

// 2. Створіть масив рядків. Виведіть у консоль перший рядок, довжина якого більша за 5 символів.
// const elements = ["sunny", "elektroperforator", "sun",  " age"];
// let result = [];
// for(let element of elements){
//     if(element.length > 5){
//         result.push(element);
//     }
// }
// console.log("Довжина елемента більше 5 символів:" + result);

// 3. Створіть масив з числами. Помножте кожне число у масиві на 2, якщо воно менше 10, та на 3, якщо воно більше або дорівнює 10. Виведіть новий масив у консоль.
// const numbers = [3, 5, 2, 4, 8, 23, 20, 15];
// let sum = [];
// for( let number of numbers){
//     if(number < 10){
//         sum.push(number * 2);
//         console.log(sum);
//     }else{
//         sum.push(number * 3);
//         console.log(sum);
//     }
// }

// 4. Створіть масив чисел. Знайдіть мінімальне число у масиві та виведіть його у консоль.
// const numbers = [3, 5, 2, 4, 8, 23, 20, 15];
// const minNumbers = Math.min(...numbers);
// console.log("Мінімальне число:" + minNumbers);



// 5. Створіть масив рядків. За допомогою циклу for перевірте кожен елемент масиву, чи містить він літеру "a". Виведіть у консоль кількість рядків, в яких зустрічається літера "a".
// const elements = ["sunny", "elektroperforator", "sun",  " age"];
// let result = [];
// for(let element of elements){
//     if(element.includes("a")){
//         result.push(element);
//     }
// }
// console.log(`"Рядок ${result} містить літеру (а)"`);

// 6. Створіть масив з числами. За допомогою циклу for знайдіть суму всіх чисел у масиві. Якщо сума більша за 100, виведіть "Сума більше 100", інакше виведіть "Сума менше або дорівнює 100".
// const numbers = [3, 45, 2, 4, 8, 23, 20, 15];
// let sum = 0;
// for(let number of numbers){
//     sum += number;
// if(sum > 100){
//     console.log(`"Сума ${sum} більша за 100"`);
// }else{
//     console.log(`"Сума ${sum} меньша за 100"`);
// }
// }

// 7. Створіть масив рядків. За допомогою циклу for перевірте кожен рядок на наявність пробілів. Якщо рядок містить пробіли, виведіть його у консоль.
// const elements = ["Hello world", "Helloworld"];
// let result = [];
// for(let element of elements){
//     if(element.includes(" ")){
//       result.push9=(element);
//       console.log(`"Рядок ${element} містить пробіл"`);
//     }else{
//         console.log(`"Рядок ${element} не містить пробіл"`);
//     }
    
// }

// 8. Створіть масив з числами. Знайдіть середнє арифметичне всіх чисел у масиві та виведіть його у консоль.
// const numbers = [3, 45, 2, 4, 8, 23, 20, 15];
// let sum = 0;
// for(let number of numbers){
//     sum += number
// }
// let allSum = sum / numbers.length;
//     console.log("середнє арифметичне" + allSum);

// 9. Створіть масив рядків. Перевірте, чи всі рядки у масиві мають довжину менше або дорівнюють 10 символів. Виведіть у консоль результат перевірки.
// const elements = ["Hello world", "Hello", "elementary", "Hi", "excuse me"]
// let result = [];
// for(let element of elements){
//     if(element.length <= 10){
//         result.push(element)
// console.log(`Рядок "${element} має менше 10 символів"`);
//     }else{
//         console.log(`Рядок "${element} має більше 10 символів"`);
//     }
// }
// 10. Створіть масив з числами. За допомогою циклу for перевірте кожне число на парність. Якщо число парне, виведіть його у консоль разом з повідомленням "Це парне число", інакше виведіть "Це непарне число".
// const numbers = [3, 45, 2, 4, 8, 23, 20, 15];
// // let result = [];
// for(let number of numbers){
//     if(number % 2 === 0){
//         // result.push(number)
//         console.log(`"Число ${number} є парним"`);
//     }else{
//         console.log(`"Число ${number} не є парним"`);
//     }
// }  
/////Тут можна і з рузалтом і без//////