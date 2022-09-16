const prompt = require("prompt-sync")();

let år = parseInt(prompt("Välj ett år "))

if (((år/400) % 1) == 0 || ((år/100) % 1) != 0 && ((år/4) % 1) == 0) {
    console.log("Året är ett skottår!")
}
else
{
    console.log("Året är inte ett skottår!")
}