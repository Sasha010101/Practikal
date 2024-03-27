// const planets = ['Earth', 'Mars', 'Venus'];

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

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);


// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
//   ];
  
//   const authorToSearchFor = "Robert Sheckley";
  
//   for (const book of books) {
//       if(book.author === authorToSearchFor) {
//           console.log(book);
//           console.log(book.title)
//           console.log(book.rating)
//       }
//   }
// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let propValues = [];
//     for(let product of products){
//       if(product === propName){
//         return propValues.push(product[propName]);
//       }
//     }
//     return propValues;
//   }
// function foo(...args) {
// 	console.log(args);
// }
// foo("a", "b");


// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 17];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = allScores;
// const worstScore = allScores;


// const objA = { 
// 	x: 1, 
// 	y: 2, 
// };

// const objB = { 
// 	y: 3, 
// };

const result = {
	x: 5,
	...objA,
	y: 10,
	... objB,
	z: 15
}


function greet(name) {
	return `Welcome ${name}!`;
  }
  
  // Викликаємо функцію greet і виводимо результат у консоль
  console.log(greet); // "Welcome Mango!"
  

