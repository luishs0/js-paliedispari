// Chiedere all'utente di inserire una parola
// Creare una funzione per sapere se la parola inserita é palindromo

// let userWord = prompt("Dimmi la tua parola");
const userWord = prompt("Dimmi una parola");

// function (userWord) { il return mi deve dire true o false } se é palindromo = true, altrimenti false
    // Identificare se é un palindromo oppure no
        // descomporre la parola a lettere 
        // mettere le lettere al contrario in una stringa formando una variabile nuova
        // let parolaNormale = userWord; let parolaStorta = parola al contrario -> Confrontarli in un if


let wordUser = "";
for (let i = 0; i < userWord.length; i++) {
    
    let numberLetter = userWord.length - (1 + i);

    //a wordUser li aggiungo ogni giro userWord[numberLetter] (quindi +=)

    wordUser += userWord[numberLetter];
    
}

console.log(wordUser);

let isPali = false;
if (userWord === wordUser) {
    isPali = true;
}

if (isPali === true) {
    document.write("Palindromo")
} else {
    document.write("Non é palindromo")
}
