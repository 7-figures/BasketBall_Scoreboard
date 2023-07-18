let score = 0
let homeScore =document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function one(){
    homeScore.textContent++
} 
function two(){
    homeScore.textContent = Number(homeScore.textContent) +2
} 
function three() {
    homeScore.textContent = Number(homeScore.textContent) +3
}
function reset(){
    homeScore.textContent = 0
}

function oneg(){
    guestScore.textContent++
} 
function twog(){
    guestScore.textContent = Number(guestScore.textContent) +2
} 
function threeg() {
    guestScore.textContent = Number(guestScore.textContent) +3
}
function resetg(){
    guestScore.textContent = 0
}