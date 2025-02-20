/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano, in inglese o nella lingua che preferite.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" */

/* Dom elements */
const numberListEl = document.querySelector('#numbers-list')
const countdownEl = document.getElementById('countdown') 
let seconds = 3;
console.log(countdownEl);

function generateRandomNumber () {
     return Math.floor(Math.random() * (50 - 1)) + 1
    };

    

function printNumber (){
    for (let i = 0; i < 5; i++){
        numberListEl.innerHTML += `<li>${generateRandomNumber()}</li>`
    }
}
printNumber()

const timer = setInterval(() => {
    seconds--
    countdownEl.innerText = seconds
    if (seconds === 0){
        clearInterval(timer)
    }
    
}, 1000);