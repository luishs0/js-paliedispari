//L'UTENTE SCEGLIE PARI O DISPARI E IL NUMERO
let userChoice = prompt("Sceglie pari o dispari ;)");

while (userChoice !== "pari" && userChoice !== "dispari" && userChoice !== "Pari" && userChoice !== "Dispari") {
    userChoice = prompt("Devi scegliere tra pari o dispari, altrimenti non giochiamo")
}

let userNumber = parseInt(prompt("Sceglie un numero da 1 a 5"));

while (userNumber > 5 || userNumber < 1) {
    userNumber = parseInt(prompt("Sceglie un numero DA UNO a CINQUE!!"));
}

console.log("l'utente ha scelto ", userChoice);
console.log(userNumber, "numero del utente");

// GENERIAMO IL NUMERO DEL COMPUTER
let computerNumber = generateRandomNumber(1, 5);
console.log(computerNumber, "numero del computer");

// FACCIAMO LE OPERAZIONI NELLA FUNZIONE PER AVERE UN MESSAGGIO FINALE
gameResult(userNumber, computerNumber);


// FUNCTIONS--------------------------------------------------
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function gameResult(firstNumber, secondNumber) {
    let finalMsg;
    let finalNumber = firstNumber + secondNumber;
    console.log(finalNumber, "somma");
    if (finalNumber % 2 === 0 && (userChoice === "pari" || userChoice === "Pari")) {
       finalMsg = document.write("Tu hai vinto");
    } else if (finalNumber % 2 !== 0 && (userChoice === "dispari" || userChoice === "Dispari")) {
        finalMsg = document.write("Tu hai vinto")
    } else {
        finalMsg = document.write("Tu hai perso")
    }
    return finalMsg
}