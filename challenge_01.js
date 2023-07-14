
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let zahl1 = prompt("Bitte die erste Zahl eingeben: ");
let zahl2 = prompt("Bitte die zweite Zahl eingeben: ");

let summe = parseFloat(zahl1) + parseFloat(zahl2);

console.log("Summe ist: " + summe);