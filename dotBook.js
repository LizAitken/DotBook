"use strict";
let information = fetch('https://jsonplaceholder.typicode.com/todos/1');

information
    .then(response => response.json())
    .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const circle1 =document.querySelector('.circle1');
const middleContent =document.querySelector('.middle-content');
const body1 =document.querySelector('.bodyName');
const header1 =document.querySelector('.header');
// const circle2 = circle1.cloneNode(false);

//Making the circle a different color
function makeColor(makeMe, whatColor) {
    makeMe.style.background = whatColor;
}

const newCircle = document.createElement('div');
newCircle.classList.add('circleStyle');

const halfBack = document.createElement('div');
halfBack.classList.add('colorbckgrd');


let counter = 0;
circle1.addEventListener('click', function(){
    if (counter === 0){
        makeColor(circle1, "#0074D9");
        counter += 1;
    } else if (counter === 1) {
        // middleContent.insertBefore(circle2, circle1);
        // makeColor(circle1, "#0074D9");
        middleContent.insertBefore(newCircle, circle1);
        counter += 1;
    } else if (counter == 2) {
        body1.insertBefore(halfBack, header1);
        counter += 1;
    } else if (counter == 3) {
        newCircle.addEventListener('click', function() {
            // console.log(information);
            halfBack.classList.add('colorbckgrdLeft');
            body1.insertBefore(halfBack, header1);
        });
        // halfBack.classList.add('colorbckgrdLeft');
        // body1.insertBefore(halfBack, header1);
        // counter += 1;
    }
});




