/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// VARIABLES
let kmRide;
let ageUser;
const kmPrice = 0.21;
let ridePrice;
let ridePriceNew;
const youngTarget = 18;
const seniorTarget = 65;
const youngOffer = 20;
const seniorOffer = 40;
const maxAge = 130;
let ticketPrice;
// ASK USER FOR HIS AGE
ageUser = prompt("Qual è la tua età?");
//CONVERT THE STRING IN INT
ageUser = parseInt(ageUser);
//CHECK INPUT FOR MAX AGE
if (ageUser && !isNaN(ageUser) && ageUser > maxAge) {
    alert("Sei probabilmente morto, buon riposo.")
    location.reload();
}
//CHECK INPUT
else if (ageUser && !isNaN(ageUser)) {
    //INPUT IS OK, ASK USER FOR KMs OF THE RIDE
    kmRide = prompt("Quanti km devi percorrere?");
    //CONVERT THE STRING IN INT
    kmRide = parseInt(kmRide);
    //CHECK INPUT
    if (kmRide && !isNaN(kmRide)) {
        //CALC RIDE PRICE
        ridePrice = kmPrice * kmRide;
        //APPLY THE OFFER BASED ON THE AGE
        if (ageUser < youngTarget) {
            ridePriceNew = ridePrice - (ridePrice * youngOffer / 100);
            document.getElementById("offer-type").innerHTML = "Young"
        }
        else if (ageUser > seniorTarget) {
            ridePriceNew = ridePrice - (ridePrice * seniorOffer / 100);
            document.getElementById("offer-type").innerHTML = "Senior"

        }
        else {
            ridePriceNew = ridePrice;
            document.getElementById("offer-type").innerHTML = "Base"
        }

        //INPUT CHECK FAILED
    } else {
        alert("Non hai inserito un kilometraggio valido, riprova.");
        location.reload();
    }
}

//INPUT CHECK FAILED
else {
    alert("Non hai inserito un'età, riprova.");
    location.reload();
}
//WRITE THE AGE IN THE TICKET html
document.getElementById("user-age").innerHTML = ageUser;
//WRITE RIDE KMs IN THE TICKET html
document.getElementById("ride-km").innerHTML = kmRide;
// MAKE THE PRICE IN EURO FORMAT (2 decimals)
ridePriceNew = ridePriceNew.toFixed(2);
// REPLACE DOT WITH COMMA (euro format)
ridePriceNew = ridePriceNew.replace(".", ",");
//ADD EURO SYMBOL 
ridePriceNew = ridePriceNew += "€";
//ADD ticket-price in the HTML
document.getElementById("ticket-price").innerHTML = ridePriceNew;
// WRITE BASE PRICE IN HTML ONLY IF OFFER IS APPLIED (EURO FORMATTED)
if (ageUser < youngTarget || (ageUser > seniorTarget)) {
ridePrice = ridePrice.toFixed(2);
ridePrice = ridePrice.replace(".", ",");
ridePrice = ridePrice += "€";
document.getElementById("base-price").innerHTML = ridePrice;
}
// OTHERWISE EMPTY THE DIV
else {
    document.getElementById("pricebase-box").innerHTML = "";
}
