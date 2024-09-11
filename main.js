
function increment(){
document.querySelector("div").classList.toggle("inc");
}

function decrement(){
    document.querySelector("div").classList.toggle("dec");
}



document.querySelector(".incfont").onclick=increment;

document.querySelector(".decfont").onclick=decrement;