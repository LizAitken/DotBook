"use strict";

const circle1 =document.querySelector('.circle1');
const middleContent =document.querySelector('.middle-content');
// const circle2 = circle1.cloneNode(false);



//Making the circle a different color
function makeColor(makeMe, whatColor) {
    makeMe.style.background = whatColor;
}

//On click 1: change color
//Click 2: create new circle next to it
//Click 3:

let change = false;

const newCircle = document.createElement('div');
newCircle.classList.add('circleStyle');

let counter = 0;
circle1.addEventListener('click', function(){
    if (counter === 0){
        makeColor(circle1, "#0074D9");
        counter += 1;
    } else if (counter === 1) {
        // middleContent.insertBefore(circle2, circle1);
        makeColor(circle1, "#0074D9");
        middleContent.insertBefore(newCircle, circle1);
        counter += 1;
    } 
    //     else if (counter === 2) {
    //     middleContent.insertBefore(newCircle, circle1);
    //     counter += 1;
    // }
});


