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


formBiglietto.addEventListener('submit', function(e){
    e.preventDefault()

    //recuperare valori form
    const nome = inputNome.value
    const cognome = inputCognome.value
    const tratta = parseFloat(inputTratta.value)
    const sconto = selectSconto.value

    if(isNaN(tratta)){
        alert('Inserisci una distanza valida in KM')
        return
    }

    let prezzo = tratta*0.21
    let PrezzoFinale = 0

    // Calcolo prezzo finale

    if (sconto === '20%'){
        PrezzoFinale = prezzo - (prezzo*0.2)
    } else if (sconto === '40%'){
        PrezzoFinale = prezzo -(prezzo*.4)
    } else {
        PrezzoFinale = prezzo
    }


    console.log(PrezzoFinale)
    console.log(prezzo)
    console.log(inputTratta)




    //stampare nella card-biglietto

    outputNome.innerHTML = nome
    outputCognome.innerHTML = cognome
    outputTratta.innerHTML = tratta
    outputSconto.innerHTML = sconto
    outputPrezzoFinale.innerHTML = PrezzoFinale.toFixed(2) + " €"


})


