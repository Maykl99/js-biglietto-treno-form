/* Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero 
Codice treno (numero casuale tra 90000 e 100000 escluso) fatto
Numero carrozza fatto
Prezzo calcolato fatto
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
Buon lavoro e buon viaggio! */






var genera=document.getElementById("genera").addEventListener("click", funzioneGenera);
var annulla=document.getElementById("annulla").addEventListener("click",funzioneAnnulla);


function funzioneAnnulla(){

    // annulla codici randomici di carrozza e codice cp
    var codiceCp=document.getElementById('codiceCp').innerHTML='';
    var carrozza=document.getElementById('carrozza').innerHTML='';
    
    // annulla il nome del passeggero
    var utente= document.getElementById('preleva').value;
    utente += document.getElementById('nomePasseggero').innerHTML='';

    // annulla il prezzo del biglietto in base alla distanza
    var utentePrezzo= document.getElementById('prelevaDistanza').value;
    utentePrezzo += document.getElementById('prezzo').innerHTML=''; 

  return codiceCp, carrozza, utente, utentePrezzo; //etaPrezzoUtente;
}




// funzione genera al click del pulsante genera devo prendere i valori passati dagli input, nome e cognome, distanza di km e la fascia d'età;

function funzioneGenera() {

    // genera codici randomici di carrozza e codice cp
    var codiceCp=document.getElementById('codiceCp').innerHTML=getRandomInt();
    var carrozza=document.getElementById('carrozza').innerHTML=numeroCarrozza();
    
    // genera il nome del passeggero
    var utente= document.getElementById('preleva').value;
    utente += document.getElementById('nomePasseggero').innerHTML=utente;

    // genera il prezzo del biglietto in base alla distanza
    var utentePrezzo= document.getElementById('prelevaDistanza').value;
    utentePrezzo += document.getElementById('prezzo').innerHTML=costoBiglietto(utentePrezzo); 


    fasciaEta = document.getElementById('offerta').innerHTML=fasciaEta;

  return codiceCp, carrozza, utente, utentePrezzo, fasciaEta; //etaPrezzoUtente;
}



// funzione che ritorna il prezzo in base alla distanza dei km da percorrere e in base all'età dell'utente
function costoBiglietto(kmDaPercorrere='',eta=''){
    var prezzoKm=0.21;
    prezzoKm *= kmDaPercorrere;
    if(eta < 18){
        prezzoKm * 20 / 100;
    }else if(eta >= 65){
        prezzoKm * 40 / 100;
    }else{
        prezzoKm;
    }

    return prezzoKm + ' €';
}


// funzione che genera un codice treno casuale con un intervallo fra 90.000 e 100.000 escluso.
function getRandomInt(){
    var min = Math.ceil(90000);
    var max = Math.floor(100000);
    var esito=Math.floor(Math.random() * (max - min)) + min;
    return esito; //Il max è escluso e il min è incluso
}

//funzione genra un numero Carrozza randomico fra 1 e 10 incluso 
function numeroCarrozza(){
    var random=null;
    random= Math.floor(Math.random()*10)+1;
    return random;
}

