let valorCarta = ["1","2","3","4","5","6","7","8","9","J","Q","K"];
let pintas = ["♦", "♥", "♠", "♣"]

let numero = document.querySelector("#numero");
let random = Math.floor(Math.random() * valorCarta.length);
let numeroCarta = (valorCarta[random]);
numero.innerHTML = (numeroCarta);

let pinta = document.querySelector("#pinta");
let pinta1 = document.querySelector("#pinta1");
let random1 =  Math.floor(Math.random() * pintas.length);
let pintaCarta = (pintas[random1]);
if (pintas[random1] == "♦") pinta.style.color = "red", pinta1.style.color = "red"; 
if (pintas[random1] == "♥") pinta.style.color = "red", pinta1.style.color = "red"; 
pinta.innerHTML = (pintaCarta);
pinta1.innerHTML = (pintaCarta);

let boton = document.querySelector("button");
boton.addEventListener('click', _ => {
    location.reload();
})
