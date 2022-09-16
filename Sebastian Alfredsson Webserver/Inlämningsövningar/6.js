const prompt = require("prompt-sync")();

let nummer1 = parseInt(prompt("Skriv ditt första tal "));
let nummer2 = parseInt(prompt("Skriv ditt andra tal "));
let nummer3 = parseInt(prompt("Skriv ditt tredje tall "))

if(nummer1 > nummer2){
console.log("Det minskar från första talet")
}

if(nummer1 < nummer2){
    console.log("Det ökar från första talet")
}

if(nummer1 == nummer2){
    console.log("Det varken ökar eller minskar från första talet")
}

if(nummer2 > nummer3){
    console.log("Det minskar från andra talet")
}
        
if(nummer2 < nummer3){
    console.log("Det ökar från andra talet")
}
        
if(nummer2 == nummer3){
    console.log("Det varken ökar eller minskar från andra talet")
}
