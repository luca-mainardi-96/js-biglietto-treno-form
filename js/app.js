//Dichiarazione Variabili

const inputNome = document.getElementById('nome')
const inputCognome = document.getElementById('cognome')
const inputTratta = document.getElementById('tratta')
const selectSconto = document.getElementById('sconto')
const formBiglietto = document.getElementById('form')

const outputNome = document.getElementById('output-nome')
const outputCognome = document.getElementById('output-cognome')
const outputTratta = document.getElementById('output-km')
const outputSconto = document.getElementById('output-sconto')
const outputPrezzoFinale = document.getElementById('output-prezzo-finale')

const prezzo = inputTratta*0.21
let PrezzoFinale = ''

formBiglietto.addEventListener('submit', function(e){
    e.preventDefault()

    //recuperare valori form
    const nome = inputNome.value
    const cognome = inputCognome.value
    const tratta = inputTratta.value
    const sconto = selectSconto.value

    //stampare nella card-biglietto

    outputNome.innerHTML = nome
    outputCognome.innerHTML = cognome
    outputTratta.innerHTML = tratta
    outputSconto.innerHTML = sconto
    outputPrezzoFinale.innerHTML = PrezzoFinale


})


// Calcolo prezzo finale

if (inputTratta === '20%'){
    PrezzoFinale = prezzo - (prezzo*0.2)
} else if (inputTratta === '40%'){
    PrezzoFinale = prezzo -(prezzo*.04)
} else {
    PrezzoFinale = prezzo
}