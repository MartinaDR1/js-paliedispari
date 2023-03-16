//Palidroma
/*Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

// Chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
console.log(userWord);

// Creo una funzione 
function wordPal (enterWord){
    let word = enterWord.split('').reverse('').join('');
    if (enterWord == word){
        return true
    } else {
        return false
    }
}

// Verifico se la parola inserita è palindroma o meno e stampo il risultato
if(wordPal(userWord)){
    console.log('Hai inserito una parola palindroma');
} else {
    console.log('Hai inserito una parola non palindroma');
}