// const roomsEl = document.querySelector("#rooms")
// console.log(roomsEl);
// const headingEl = document.querySelector("#heading");
// console.log(headingEl);
// const sliderEl = document.querySelector(".slider");
// console.log(sliderEl);
// const slideEl = document.querySelector(".slide");
// console.log(slideEl);
// const infoEl = document.querySelector(".info");
// console.log(infoEl);
// const subHeadingEl = document.querySelector("#sub-heading");
// console.log(subHeadingEl);
// const squareEl = document.querySelector(".square");
// console.log(squareEl);
// const discriptionEl = document.querySelector("discription");
// console.log(sliderEl);
// const bookEl = document.querySelector(".book");
// console.log(bookEl);

// const roomsElem = document.querySelector("#rooms h4");
// console.log(roomsElem);
// const infoElem = document.querySelector(".info h5");
// console.log(infoElem);
// const infoElemen = document.querySelector(".info button");
// console.log(infoElemen);
// const roomsElement = document.querySelector("#rooms .slider");
// console.log(roomsElement);

const bookEl = document.querySelector(".book");
bookEl.style.backgroundColor = "teal";
bookEl.style.fontSize = "16px";
bookEl.style.textAlign = "center";
bookEl.style.borderColor = "tomato";
bookEl.style.color = "violet";
bookEl.addEventListener("click", function(){
    console.log("Hello world");
});
const squareEl = document.querySelector(".square");
squareEl.style.border = '1px solid black';
squareEl.addEventListener("mouseover", (event) =>{
    console.log("mouse is over");

    const numbers = [2, 5, 6, 7];
    numbers.forEach(number => {
        if(number % 2 !== 0){
            console.log(number);
        }
    })
});
// const discriptionEl = document.querySelector(".discription")
// discriptionEl.addEventListener("click", event =>{
//     console.log(discriptionEl.textContent.length);
// });
// const discriptionEl = document.querySelector(".discription");
// const hasActiveClass = discriptionEl.classList.contains("discription");
// discriptionEl.classList.add("is-active");
// discriptionEl.classList.toggle("is-active");
// discriptionEl.classList.replace("discription", "shlak");
// console.log(discriptionEl.classList);
