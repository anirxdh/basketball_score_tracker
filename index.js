

let homescore = document.getElementById("home-el").textContent
let awayscore = document.getElementById("away-el").textContent
// parseInt(homescore) = homescore
// parseInt(awayscore) = awayscore

function h1(){
    homescore++
    document.getElementById("home-el").textContent=homescore
}
function h2(){
    homescore++
    homescore++

    document.getElementById("home-el").textContent=homescore
}
function h3(){
    homescore++
    homescore++

    homescore++

    document.getElementById("home-el").textContent=homescore
}
function a1(){
    awayscore++
    
    document.getElementById("away-el").textContent=awayscore
}
function a2(){
    awayscore++
    awayscore++

    document.getElementById("away-el").textContent=awayscore
}
function a3(){
    awayscore++
    awayscore++

    awayscore++

    document.getElementById("away-el").textContent=awayscore
}
