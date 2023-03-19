//Palidroma
/*Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/

// Chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
console.log(userWord);

// Creo una funzione 
function wordPal (enterWord){
    let word = enterWord.split('').reverse().join('');
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


//Pari e Dispari
/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

// Chiedo all'utente di scegliere fra pari e dispari
let choice = prompt('Scegli fra pari e dispari');

// Chiesto all'utente di inserire un numero
const numberUser = Number(prompt('Inserisci un numero da 1 a 5'));

console.log(`L'utente ha scelto: ${choice} e il numero ${numberUser}`);

// Genero un numero random per il pc
function pcNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const randNumber = pcNumber(1, 5);
console.log(`Il pc genera il numero:${randNumber}`);

// Sommo i due numeri
function sum (num1, num2){
    const resultFinal = num1 + num2;
    return resultFinal
};

const result = sum(numberUser,randNumber)
console.log(`La somma dei due numeri è: ${result}`);

// Verifico se la somma restituisce un numero pari o dispari e stampo chi vince
function winner (numb, choice){
    if ( choice == 'pari' && numb % 2 == 0 || choice =='dispari' && numb % 2 != 0){
        return true
    } else {
        return false
    }
};
 
if (winner(result)){
    console.log(`Complimenti! Hai vinto`);
} else {
    console.log('Mi dispiace! Ha vinto il pc');
}

