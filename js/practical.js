// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
//   return acc + averagePlaytimePerGame;
// }, 0);

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance
//   }, 0)};
//  const sumUsers = [
//    {
//      name: "Moore Hensley",
//      email: "moorehensley@indexia.com",
//      eyeColor: "blue",
//      friends: ["Sharron Pace"],
//      isActive: false,
//      balance: 2811,
//      gender: "male"
//    },
//    {
//      name: "Sharlene Bush",
//      email: "sharlenebush@tubesys.com",
//      eyeColor: "blue",
//      friends: ["Briana Decker", "Sharron Pace"],
//      isActive: true,
//      balance: 3821,
//      gender: "female"
//    },
//    {
//      name: "Ross Vazquez",
//      email: "rossvazquez@xinware.com",
//      eyeColor: "green",
//      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//      isActive: false,
//      balance: 3793,
//      gender: "male"
//    },
//    {
//      name: "Elma Head",
//      email: "elmahead@omatom.com",
//      eyeColor: "green",
//      friends: ["Goldie Gentry", "Aisha Tran"],
//      isActive: true,
//      balance: 2278,
//      gender: "female"
//    },
//    {
//      name: "Carey Barr",
//      email: "careybarr@nurali.com",
//      eyeColor: "blue",
//      friends: ["Jordan Sampson", "Eddie Strong"],
//      isActive: true,
//      balance: 3951,
//      gender: "male"
//    },
//    {
//      name: "Blackburn Dotson",
//      email: "blackburndotson@furnigeer.com",
//      eyeColor: "brown",
//      friends: ["Jacklyn Lucas", "Linda Chapman"],
//      isActive: false,
//      balance: 1498,
//      gender: "male"
//    },
//    {
//      name: "Sheree Anthony",
//      email: "shereeanthony@kog.com",
//      eyeColor: "brown",
//      friends: ["Goldie Gentry", "Briana Decker"],
//      isActive: true,
//      balance: 2764,
//      gender: "female"
//    }
//  ];
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();
// console.log(authors.toSorted());
// console.log(releaseDates.toSorted());
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
//   .map(user => user.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);



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
