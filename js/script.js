/* Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero 
Codice treno (numero casuale tra 90000 e 100000 escluso) 
Numero carrozza 
Prezzo calcolato 
Categoria selezionata dall'utente; aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.*/

var genera=document.getElementById("genera").addEventListener("click", funzioneGenera);
var annulla=document.getElementById("annulla").addEventListener("click",funzioneAnnulla);

// funzione genera al click del pulsante genera devo prendere i valori passati dagli input, nome e cognome, distanza di km e la fascia d'età;
function funzioneGenera() {

    var mostra=document.getElementById('utente').className='show';

    // genera il prezzo del biglietto in base alla distanza
    var utentePrezzo= document.getElementById('prelevaDistanza').value;
    var prezzo=costoBiglietto(utentePrezzo);
    // eta //-> offerta
    var fasciaEta=document.getElementById('eta').value;
    // sconto in base all'età dell'utente
    var messaggio='Tariffa standard';

    if(fasciaEta == 'minorenne'){
      prezzo = utentePrezzo * 20 / 100;
      messaggio='Tariffa minorenni';
    }
    else if(fasciaEta == 'over65'){
      prezzo = utentePrezzo * 10 / 100;
      messaggio = 'Tariffa Silver';
    }

    fasciaEta = document.getElementById('offerta').innerHTML=messaggio;
    utentePrezzo += document.getElementById('prezzo').innerHTML= prezzo + ' €'; //costoBiglietto(utentePrezzo);

    // genera codici randomici di carrozza e codice cp
    var codiceCp=document.getElementById('codiceCp').innerHTML=getRandomInt(1,11);
    var carrozza=document.getElementById('carrozza').innerHTML=getRandomInt(90000,100000);
    
    // genera il nome del passeggero
    var utente= document.getElementById('preleva').value;
    utente += document.getElementById('nomePasseggero').innerHTML=utente; 
}

function funzioneAnnulla(){
    var nascondi=document.getElementById('utente').className='hidden';
 
    // annulla codici randomici di carrozza e codice cp
    var codiceCp=document.getElementById('codiceCp').innerHTML='';
    var carrozza=document.getElementById('carrozza').innerHTML='';
    
    // annulla il nome del passeggero
    var utente= document.getElementById('preleva').value;
    utente += document.getElementById('nomePasseggero').innerHTML='';

    // annulla il prezzo del biglietto in base alla distanza
    var utentePrezzo= document.getElementById('prelevaDistanza').value;
    utentePrezzo += document.getElementById('prezzo').innerHTML=''; 

} 



// funzione che ritorna il prezzo in base alla distanza dei km da percorrere
function costoBiglietto(kmDaPercorrere){
    var prezzoKm=0.21;
    prezzoKm *= kmDaPercorrere;
    return prezzoKm;
}


//funzione genera un numero Carrozza randomico fra 1 e 10
// funzione che genera un codice treno casuale con un intervallo fra 90.000 e 100.000 escluso.
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var esito=Math.floor(Math.random() * (max - min)) + min;
    return esito; //Il max è escluso e il min è incluso
}


