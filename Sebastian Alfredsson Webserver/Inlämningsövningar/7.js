const prompt = require("prompt-sync")();

let tecken = (prompt("Skriv ditt första tal "));

Number.isFinite(tecken);
