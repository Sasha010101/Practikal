
//(1) Напишіть функцію, яка приймає масив чисел і 
// повертає суму всіх елементів у масиві.
// const mainEl = document.querySelector("#main");
// function calculateSumArr(numbers){
//     let sum = 0;
//     for(let number of numbers){
//         sum += number;
//     }
//     return [sum];
//     };
//     const arrNumbers = [2, 4, 6, 10,3]

// mainEl.addEventListener("click", () => {
//     console.log("Hello ous website");
//     console.log(calculateSumArr(arrNumbers));
// });



// (3.) Напишіть функцію, яка приймає масив чисел 
// і повертає кількість додатних чисел у масиві.
// const listEl = document.querySelector(".list");
// function logPositiveNumbers(numbers){
//     let result = 0
// for(let number of numbers){
//     if(number > 0){
//         result++;
//     }
// }
// return result
// };
// const arrNumbers = [-1, 4, 6, -4, -5, 7];

// listEl.addEventListener("mouseover", event =>{
// console.log("Hello List");
// console.log(logPositiveNumbers(arrNumbers));
// })


// 4. Напишіть функцію, яка приймає масив рядків 
// і повертає новий масив, в якому всі рядки записані в 
// обернутому вигляді.(при натісканні на лішки спрацьовує тільки 1 лішка)

// const itemEl = document.querySelector(".item");
// function giveReverseString(string){
//     return string.map(str => str.split("").reverse().join(""));
// };
// const arrStrings = ["JS", "HTML", "CSS", "React", "Vue" ];
// itemEl.addEventListener("mouseout", event =>{
//     console.log("Godbye");
//     console.log(giveReverseString(arrStrings));
// })

// const textEl = document.querySelector(".text");
// console.log(textEl);


//(2) Напишіть функцію, яка приймає масив рядків 
// і повертає новий масив, який містить тільки рядки, 
// які починаються з літери "A".

// const miniButtonEl = document.querySelector(".mini-button");
// function logNewArray(string){
//     const result = [];
//     for(let str of string){
//         if(str.startsWith("A")){
//             result.push(str);
//         }
//     }
// return result;
// };
// const arrStr = ["Anton", "Dima", "Alla", "andrii", "Sasha"];
// miniButtonEl.addEventListener("focus", event => {
// console.log(logNewArray(arrStr));
// });




// const menuEl = document.querySelector(".menu");
// console.log(menuEl);

// 5. Напишіть функцію, яка приймає масив 
// чисел і повертає найбільше число у масиві.

// 7. Напишіть функцію, яка приймає масив рядків і повертає новий масив,
//  в якому всі рядки складаються з менше ніж 5 символів.
const titleEl = document.querySelector(".title");

function giveNewArrStrFewFiveSymbol(string){
    return string.filter(str => str.length < 5);
};
const newArrStr = ["Sasha", "Dima", "Mariia", "Anatoliy", "Olga"];

titleEl.addEventListener("mouseover", event => {
    console.log("Рядок менше 5 символів");
    console.log(giveNewArrStrFewFiveSymbol(newArrStr));
})
// const subTitleEl = document.querySelector(".sub-title");
// console.log(subTitleEl);

// const shoppingEl = document.querySelector(".shopping");
// console.log(shoppingEl);

// const linkElem = document.querySelector("#link");
// function getMostNumber(numbers) {
//     return Math.max(...numbers)
// }
// const arrNumbers = [22, 55, 66, 98, 300, 444];
// linkElem.addEventListener("click", event => {
//     linkElem.textContent = "";
//     console.log(getMostNumber(arrNumbers));
// });


// 6. Напишіть функцію, яка приймає масив 
// чисел і повертає новий масив, в якому всі 
// від'ємні числа замінені на 0.

// const registerEl = document.querySelector(".register");
// function giveNegativeNumberConvertedToZero(numbers){
//     return numbers.map(number =>{
// if(number < 0){
//     return 0;
// }else{
//     return number;
// }
//     });
    
// }
// const arrNumber = [-1, 2, -6, -12, -15, 10];

// registerEl.addEventListener("click", event =>{
//     console.log(giveNegativeNumberConvertedToZero(arrNumber));
   
// })
