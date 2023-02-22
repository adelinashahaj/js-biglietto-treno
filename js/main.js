

/*
let etaViaggiatore = parseInt(prompt("inserisci l'eta del viaggiatore"));
let distanza = parseInt(prompt("inserisci la distanza km"));

prezzo = 0.21;
prezzofinale = etaViaggiatore * distanza;
console.log(prezzofinale);

sconto20 = (prezzofinale * 20) / 100;
sconto40 = (prezzofinale * 40) / 100;


if (etaViaggiatore < 18){
    prezzofinale = prezzofinale - sconto20;
    document.getElementById("biglietto").innerHTML = "Hai lo sconto di 20% <br> "prezzofinale.toFixed(2)
} else if (distanza > 65){
    prezzofinale = prezzofinale - sconto40;
    document.getElementById("biglietto").innerHTML = "Hai lo sconto di 40%" prezzofinale.toFixed(2)
}else{
    document.getElementById("biglietto").innerHTML = prezzofinale.toFixed(2)
}

*/


let etaViaggiatore = parseInt(prompt("inserisci l'eta del viaggiatore"));
let kilometri = parseInt(prompt("inserisci la distanza km"));


let prezzo = kilometri * 0.21;
let sconto = ""; 

if (etaViaggiatore < 18){
    prezzo = (prezzo / 100 * 80).toFixed(2);
    sconto = "Hai lo sconto di 20% <br> ";    
   
} else if (etaViaggiatore > 65){
    prezzo = (prezzo / 100 * 60).toFixed(2);
    sconto = "Hai lo sconto di 40%";    
   
  
}else {
    prezzo = prezzo.toFixed(2);

}

document.getElementById("biglietto").innerHTML = sconto + "Il biglietto costa: "  + prezzo + "€";


