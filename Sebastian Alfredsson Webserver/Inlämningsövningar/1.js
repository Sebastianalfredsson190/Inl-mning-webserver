const prompt = require("prompt-sync")();

let intervall1 = parseInt(prompt("Skriv det första talet i intervallen "));
let intervall2 = parseInt(prompt("Skriv det andra talet i intervallen "));
let nummer = parseInt(prompt("Välj ett tal "))

if (intervall1 <= nummer && nummer <= intervall2) {
    console.log("Talet är i intervallen!")
}
else
{
    console.log("Talet är inte i intervallen!")
}