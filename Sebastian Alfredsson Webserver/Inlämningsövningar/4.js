const prompt = require("prompt-sync")();

let nummer1 = parseInt(prompt("Skriv ditt första tal "));
let nummer2 = parseInt(prompt("Skriv ditt andra tal "));
let nummer3 = parseInt(prompt("Skriv ditt tredje tall "))

if (nummer1 > nummer2 && nummer1 > nummer3) {
    console.log(nummer1 + " Är det största talet")
}
if (nummer2 > nummer1 && nummer2 > nummer3) {
    console.log(nummer2 + " Är det största talet")
}
if (nummer3 > nummer2 && nummer3 > nummer1) {
    console.log(nummer3 + " Är det största talet")
}