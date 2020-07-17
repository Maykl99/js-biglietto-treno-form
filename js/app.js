/* Partendo dall'esercizio della scorsa settimana aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
Buon lavoro e buon viaggio! */


//Funzione che calcola il prezzo del biglietto in base all'età
//prezzoKm= 0.21;
//var utente= parseInt(prompt('Quanti km devi percorrere?'));
//var eta= parseInt(prompt('Quanti anni hai?'));

//console.log(costoBiglietto(utente));
//console.log(etaUtente(eta)); 

/* 
var esito=document.getElementById('prezzo').innerHTML=costoBiglietto(utente);

 function costoBiglietto(kmDaPercorrere){
   var prezzoKm= 0.21;
   prezzoKm *= kmDaPercorrere;
   return prezzoKm + ' €';
} */

/* function etaUtente(eta){
    //prezzoKm*=costoBiglietto();
    var prezzoKm= 0.21;
    var kmDaPercorrere;
    prezzoKm *= costoBiglietto();
    if(eta < 18){
        prezzoKm * 20 / 100;
    }else if(eta > 65){
        prezzoKm * 40 / 100;
    }else{
        prezzoKm;
    }

    return prezzoKm;
}  */

/* document.getElementById("genera").addEventListener("click", function () {
    var valore = document.getElementById("nome").value;
  
    var utente = document.getElementById("utente");
    utente.innerHTML = valore;
    utente.classList.remove("hidden");
    utente.classList.add("show");
  
    utente.className = 'show'; 
  }); */



/*var lunghezzaViaggio = parseInt(prompt('Quanti km devi percorrere?'));
var etaViaggiatori = parseInt(prompt('Quanti anni hai?'));
var prezzoKm = 0.21 * lunghezzaViaggio;
var scontoSulPrezzoMinori;
var scontoSulPrezzoOver;


if(isNaN(lunghezzaViaggio) || isNaN(etaViaggiatori) || isNaN(prezzoKm)){  // Controllo valori passanti
    alert('inserisci soltanto numeri e non lasciare vuoti i campi di compilazione!'); 
} 

else{ // esegui se e solo se i valori sono numerici
    if(etaViaggiatori < 18){
        var scontoSulPrezzoMinori = 20 * prezzoKm / 100 ;
        var prezzoFinale = prezzoKm - scontoSulPrezzoMinori;
    }

    else if(etaViaggiatori > 65){
        var scontoSulPrezzoOver = 40 * prezzoKm / 100 ;
        var prezzoFinale = prezzoKm - scontoSulPrezzoOver;
    }

    else{
        var prezzoFinale = prezzoKm;
    }

    var risultato= document.getElementById('utente').innerHTML=Math.round(prezzoFinale) + ' euro'; 
}

console.log(prezzoFinale)
console.log(etaViaggiatori) */


// genera numeri randomici






    /* var utentePrezzo= document.getElementById('prezzoIpunt').value;
    utentePrezzo +=document.getElementById('prezzo').innerHTML=costoBiglietto(utentePrezzo); */
    //console.log(utentePrezzo)
/*     var prezzo= document.getElementById('prezzoInput').value;
    console.log(prezzo)
    prezzo += document.getElementById('prezzo').innerHTML=costoBiglietto(utente);
    console.log(prezzo) */
    //var prezzo= document.getElementById('prezzo').innerHTML=costoBiglietto(utente);



    
    /* var prezzo= document.getElementById().value;
    prezzo += document.getElementById().innerHTML=prezzo; */
    //var utentePrezzo= parseInt(prompt('Quanti km devi percorrere?'));



    
    
    /* if(fasciaEtaUtente === document.body.getElementsByTagName("option")[0]){
        console.log(fasciaEtaUtente)
    } */


    var lista = document.getElementById("genera").addEventListener("click", fasciaEtaUtente);

function fasciaEtaUtente(){
    var fasciaEtaUtente; 
    if(document.getElementsByTagName("option")[0]){
        //utentePrezzo += utentePrezzo * 20 / 100;
        fasciaEtaUtente += fasciacostoBiglietto(utentePrezzo) * 20 / 100;
    }else if(document.getElementsByTagName("option")[1]){
        //utentePrezzo;
        fasciaEtaUtente += fasciacostoBiglietto(utentePrezzo)
    }else if(document.getElementsByTagName("option")[2])
        //utentePrezzo += utentePrezzo * 40 / 100;
        fasciaEtaUtente += fasciacostoBiglietto(utentePrezzo) * 40 / 100;
    return fasciaEtaUtente;
}


/* var utente= document.getElementById('preleva').value;
console.log(utente); */

    /* var operazione= document.getElementById("utente");
    operazione.className="hidden"; */

    
    // prezzo generato in base all'opzione dell'età
/*     var etaPrezzoUtente=document.getElementsByTagName("option");
    etaPrezzoUtente += document.getElementById('offerta').innerHTML=etaPrezzoUtente; */


    
/*     var operazione=document.getElementById("utente");
   /*  operazione.classList.remove("hidden");
    operazione.classList.add("show");
    operazione.className="show";  */


    

/* console.log(list())

var lista = document.getElementById("genera").addEventListener("click", list);

function list(){
    var fasciaEtaUtente1= document.getElementsByTagName("option")[0];
    var fasciaEtaUtente2= document.getElementsByTagName("option")[1];
    var fasciaEtaUtente3= document.getElementsByTagName("option")[2];

    utenteList=[fasciaEtaUtente1,fasciaEtaUtente2,fasciaEtaUtente3];

    for(var i=0; i<utenteList.length; i++){
    console.log(utenteList[i]);
    }

    return utenteList;

}
 */
//Adesso devo dire all'utente di scegliere fra le tre opzioni ed in base alla sua età avrà un diverso costo del biglietto
    // prezzo generato in base all'opzione dell'età
/*     var etaPrezzoUtente=document.getElementsByTagName("option");
    etaPrezzoUtente += document.getElementById('offerta').innerHTML=''; */