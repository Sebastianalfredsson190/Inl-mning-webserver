const prompt = require("prompt-sync")();

let nummer1 = parseInt(prompt("Skriv ditt första tal "));
let nummer2 = parseInt(prompt("Skriv ditt andra tal "));
let nummer3 = parseInt(prompt("Skriv ditt tredje tall "))

let nummer4=[];

nummer4.push(nummer1,nummer2,nummer3)
nummer4.sort()
console.log(nummer4)