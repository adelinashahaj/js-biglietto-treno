
let etaViaggiatore = parseInt(prompt("inserisci l'eta del viaggiatore"));
let distanza = parseInt(prompt("inserisci la distanza km"));

prezzo = 0.21;
prezzofinale = etaViaggiatore * distanza;
console.log(prezzofinale);

sconto20 = (prezzofinale * 20) / 100;
sconto40 = (prezzofinale * 40) / 100;


if (etaViaggiatore < 18){
    prezzofinale = prezzofinale - sconto20;
    document.getElementById("price").innerHTML = prezzofinale.toFixed(2)
} else if (distanza > 65){
    prezzofinale = prezzofinale - sconto40;
    document.getElementById("price").innerHTML = prezzofinale.toFixed(2)
}else{
    document.getElementById("price").innerHTML = prezzofinale.toFixed(2)
}