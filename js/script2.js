/* Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero 
Codice treno (numero casuale tra 90000 e 100000 escluso) fatto
Numero carrozza fatto
Prezzo calcolato fatto
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
Buon lavoro e buon viaggio! */

/* 
document.getElementById("genera").addEventListener("click", myFunction);

function myFunction() {
  return alert('ciao');
} */

var utente= document.getElementsById('preleva').value;
console.log(utente);


//var eta= parseInt(prompt('Quanti anni hai?'));
//var esito=document.getElementById('prezzo').innerHTML=costoBiglietto(utente);
/* var codiceCp=document.getElementById('codiceCp').innerHTML=getRandomInt();
var carrozza=document.getElementById('carrozza').innerHTML=numeroCarrozza(); */

//console.log(costoBiglietto(utente)); //Prezzo calcolato fatto
//console.log(getRandomInt()); //Codice treno (numero casuale tra 90000 e 100000 escluso) fatto
//console.log(numeroCarrozza()); //Numero carrozza fatto */


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




// funzione genera al click del pulsante genera devo prendere i valori passati dagli input, nome e cognome, distanza di km e la fascia d'età;

var genera=document.getElementById("genera").addEventListener("click", myFunction);

function myFunction() {
    var codiceCp=document.getElementById('codiceCp').innerHTML=getRandomInt();
    var carrozza=document.getElementById('carrozza').innerHTML=numeroCarrozza();
  return codiceCp, carrozza;
}