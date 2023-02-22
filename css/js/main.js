
let etaViaggiatore = parseInt(prompt("inserisci l'eta del viaggiatore"));
let kilometri = parseInt(prompt("inserisci la distanza km"));


let prezzo = kilometri * 0.21;


if (etaViaggiatore < 18){
    prezzo = (prezzo / 100 * 80).toFixed(2);
    
   
} else (etaViaggiatore > 65){
    prezzo = (prezzo / 100 * 60).toFixed(2);
  
}
document.getElementById("biglietto").innerHTML = "Il biglietto costa: " + prezzo + "€";
