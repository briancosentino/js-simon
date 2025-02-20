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
const formEl = document.getElementById('answers-form')
const inputElements = document.querySelectorAll('input')
const messageEl = document.querySelector('#message')
console.log(inputElements);

//Global variable
let seconds = 3;
let randomNumbers =[] 
let userChoice = []
let generatedNumber;
const rightNumbers = []



//Generate random number funciton
function generateRandomNumber () {
     return Math.floor(Math.random() * (50 - 1)) + 1
    };


function printNumber (){
    for (let i = 0; i < 5; i++){
        randomNumbers.push(generateRandomNumber())
        const thisNumber = randomNumbers[i]
        numberListEl.innerHTML += `<li>${thisNumber}</li>`
        
        
        console.log(thisNumber);
        
    }
}
printNumber()
console.log(generatedNumber);
console.log(randomNumbers);


const timer = setInterval(() => {
    seconds--
    countdownEl.innerText = seconds
    if (seconds === 0){
        clearInterval(timer)
        numberListEl.classList.add('d-none')
        countdownEl.classList.add('d-none')
        formEl.classList.remove('d-none')
    }
    
}, 1000);


formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    for (let i =0; i < 5; i++){
        userChoice.push(Number(inputElements[i].value))

        if (userChoice.includes(randomNumbers[i])){
            rightNumbers.push(randomNumbers[i])
        }
    } 
    messageEl.innerText = `Complimenti hai indovinato ${rightNumbers.length} numeri, ${rightNumbers}`

    console.log(userChoice);
    
    console.log(rightNumbers);
    
    
    
})