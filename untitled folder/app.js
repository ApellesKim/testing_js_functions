const grabMe = document.querySelector(".hello h1");

console.log(grabMe);




function handleTitleClick(){
    alert("Clicked");
}

function handleMouseEnter(){
    grabMe.style.color = "orange";
}

function handleMouseLeave(){
    grabMe.style.color = "blue";
}

function handleResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleCopy(){
    alert("copier!");
}

function handleOffline(){
    alert("SOS No WIFI!!");
}

function handleOnline(){
    alert("It's connected! GOOODD!!")
}


grabMe.addEventListener("click", handleTitleClick);
grabMe.addEventListener("mouseenter", handleMouseEnter);
grabMe.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("onlie", handleOnline);
window.addEventListener("offline", handleOffline);



// const player = "Apelles";

// const player2 = {
//     name: "Minseo",
//     age:20,
//     hobby:"Basketball",
//     sayHello: function(){
//         console.log("Hello!");
//     },
// }

// console.log(player2.hobby)



// function sayHello(){
//     console.log("Hello!");
// }


// const calculator = {
//     add: function(a, b){
//         return a + b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     multiply: function(a, b){
//         return a * b;
//     },
//     divide: function(a, b){
//         return a / b;
//     },

// }

// console.log(
// calculator.add(3258, 8712),
// calculator.minus(1000, 82),
// calculator.multiply(12, 12),
// calculator.divide(369, 3),);
