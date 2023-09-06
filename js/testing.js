//     //////1.Promt and confirm;//////
// let shouldRenev = prompt("How many phones do you need?");
// console.log(shouldRenev);
// console.log(typeof shouldRenev);
//      ///////2.to Fixed//////
// let salary = 1300.2590;
// salary = Number(salary.toFixed(1));
// console.log(salary);
        /////// 3.Math//////
        // const base = 3;
        // const power = 6;
        // const result = Math.pow(base, 3);
        // console.log(result);
    //////// 4.3адачка//////
    // 1.Попросити ввести число та зберегти в перемінну
    // let power = prompt("Введіть число");
    // power = Number(power);
    // console.log(power);
     // 2. Попросити ввести степінь та зберегти в перемінну
    // let base = prompt("Введіть степінь");
    // base = Number(base);
    // console.log(base);
     // 3.Звести введені дані  в степінь і вивести .
    // const result = power ** base;
    // console.log(result);
    ////////
    ///////5.////////Math(random,round)
    // const max = 70;
    // const min = 10;
    // const result = Math.round(Math.random() * (max - min) + min);
    // console.log(result);
///////////6.//////toLowercase with slice.
//     let brand = "saMSuNg";
//     console.log(brand[4]);
//     console.log(brand.slice(5).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);
//        ///7. Логічні оператори &&, || /HE////
// const x = 10;
// const y = 20;
// const res = 15 < 10 || 15 < y; 
// console.log(res);



// function getCommonElements(array1, array2) {
//   const result = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }
// getCommonElements([1, 2, 3], [2, 4]);


// function getCommonElements(array1, array2) {


//       const result = []; // 1.
//       for (let i = 0; i < array1.length; i++){  // 2.
//         if(array2.includes(array1[i])){ // 3
//             result.push(array1[i]);
//       }
//     };
//     return result;
//     }
//     console.log(getCommonElements([1, 2, 3], [2, 4]));


   
//         function getCommonElements(array1, array2) {
//     return array1.filter(number => array2.includes(number) ? number : false);
//     }
//     console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
    


///8. task////
// const minSalary = 500;
// const maxSalary = 5000;
// const workers = 5;
// let totalSalary = 0;

// for (let i = 1; i <= workers; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`Зп працівника номер ${i} - ${salary}`);
  
//   totalSalary += salary;
//   for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    
  // }
  // console.log('totalSalary:', totalSalary);
                              //////Оператори break and continue//////
//   const clients = ["Mango", "Poly", "Ajax"];
//   const clientNameToFind = "Ajax";
//   let message;
  
//   for (const client of clients) {
//     if (client === clientNameToFind) {
//       message = "Клієнт з таким ім'ям є в базі даних!";
//       break;
//     }
  
//     // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//     message = "Клієнт з таким ім'ям відсутній в базі даних!";
//   }
  
//   console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
//   }
/////////task12///////
// function greet(name) {
//     return `Welcome to Finland ${name}.`;
// }
// console.log(greet("Mariia"));
// console.log(greet);

/////task13////
// Функція вищого порядку
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
  
//   // Функція вищого порядку
//   function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//   }
  
//   registerGuest("Манго", greet);




//   function greet (name) {
//     console.log(`Welcome to Ukraine ${name}.`); 
   
// }
// function registerGuest (name, callback){
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }
// registerGuest("Mariia", greet);


// function great (name) {
//     console.log(`Welcome at home ${name}.`);
// }
// function registerGuest (name, callback){
//     console.log(` Реєструємо гостя ${name}.`);
//     callback(name);
// }
// registerGuest("Olga", great);
//////перебирання масиву task 14/////
//  const friends = ["Mariia", "Olga", "Sasha", "Anatolii", "Yurii", "Galosha"];
// console.log(friends);
// const lastIndex = friends.length -1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
    
// }
// console.table(friends);