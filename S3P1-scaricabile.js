/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, 
 ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (numero1, numero2) { //funzione crazysum con due parametri (numero1 e numero2)

//utilizzo isNaN per verificare se sono stati inseriti correttamente due numeri e non altro

    //se numero1 non è un numero o numero2 non è un numero si produrrà un messaggio di errore:
    if (isNaN(numero1) || isNaN(numero2)) { 
        return "Almeno uno dei due numeri inseriti non è valido, riprova!";

    //inoltre se numero1 e numero2 sono uguali esegui la sommma
    } else if (numero1 !== numero2) { 
        let somma = numero1 + numero2;
        return "La somma dei due numeri è: " + somma;
    }
    else {  //altrimenti se i due numeri sono uguali esegui il prodotto
        let prodotto = somma * 3;
        return "Il prodotto dei due numeri è: " + prodotto;
    }
}

//per completare richiamo alla console la funzione,
//richiedendo che i dati da inserire siano ricevuti dall'utente,
//dato che il prompt restituisce una stringa, utilizzo parseInt per convertire il valore inserito in numero
console.log(crazySum(parseInt(prompt("Inserisci un numero intero:")), parseInt(prompt("inserisci un altro numero intero"))));



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numero) { //funzione "boundary" con un parametro (numero)
    return ((numero >= 20 && numero <= 100) || numero === 400) //non utilizzo nessun ciclo poichè mi basta in questo caso solo far restituire il valore dell'operazione che di per sè è già un booleano
}

//infine richiamo la funzione includendo la possibilità di inserire da parte dell'utente il valore, stesso procedimento dell'esercizio precedente
console.log(boundary(parseInt(prompt("Inserire un numero"))));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

//creo una funzione "reverseString" con un parametro stringa (testo)
function reverseString (testo) {
    let stringaInvertita = "";

    //prendo in ordine inverso uno per uno i caratteri della stringa
    for (let i = testo.length - 1; i >= 0; i--) {   
        stringaInvertita += testo[i]; // li reinserisco in un'altra stringa 
    }
    return stringaInvertita;
}

//primo step: inserire una stringa
let stringa = prompt("Inserire un testo:");

//secondo step: mandare la stringa nella funzione reverseString per invertirla e restituirla
let inverso = reverseString(stringa);

//ultimo step: stamparli in console
console.log(inverso);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

//creo una funzione upperFirst con un parametro (testo)
function upperFirst(testo) {

    if (typeof testo === 'string') {
    //uso .split() per dividere la frase, prende le parole e le inserisce in un array
    //scrivendo .spli(" ") divido la frase per ogni spazio, cioè per ogni spazio mi da un frammento che ssara quindi la mia parola
    let parole = testo.split(" ");

    //per ogni elemento di un array
    for ( let i = 0; i < parole.length; i++) {
        let primaLettera = parole[i].charAt(0); //estraggo e metto da parte la prima lettera
        primaLettera = primaLettera.toUpperCase(); //la rendo maiuscola
        parteDiParola = parole[i].slice(1); //prendo la parte restante della parola
        parole[i] = primaLettera + parteDiParola; //infine riunisco tutte le parti della parola
    }
    //infine ricreo una stringa da ogni elemento di array con .join()
    //scrivendo .join(" ") riunisco ogni elemento dell'array aggiungendo uno spazio tra ognuno di loro
    //altrimenti le parole sarebbero tutte attaccate poichè erano elementi di un array e quindi non erano spaziate tra loro
    return parole.join(" "); 

} else {
    return "Non ho nulla da rendere maiuscolo, riprova inserendo una frase testuale!";
}
}
console.log(upperFirst(prompt("Inserire frase di cui si renderà l'iniziale di ognuna maiuscola:")));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// creo la funzione giveMeRandom con un parametro (n)
function giveMeRandom (n) {

    if (isNaN(n)) {
        return "Mi dispiace ma non hai insetito un numero, riprova inserendo un numero!"
    }
    if (n > 0 && n <= 10) { //inserisco la condizione per cui il numero inserito sia compreso tra 0 e 10 e ne è così eseguo la funzione
        let numeriR = [];   //creo un array in cui elencare i numeri generati
        for (let i = 0; i < n; i++) { //creo un ciclo for con cui decido quanti numeri generare in base al numero n (parto da 0 fino ad n)
    
        //quindi aggiungo all'array di volta in volta i numeri generati con push
        //math.floor mi arronta i numeri, per cui avrò sempre un numero intero compreso tra 0 e 11 
        //(definisco quindi un minimo ed un massimo di numeri da generare)
        //la quantità di  numeri da generare sarà indicata poi da n   
        numeriR.push(Math.floor(Math.random() * 11)); 
        }
        return numeriR; //restituisco il valore della generazione di sopra
    } else { //se il numero inserito non è compreso tra 0 e 10 stampa un messaggio di errore e chiede di reinserire il numero poichè non è valido
        console.log("Il numero inserito non è compreso tra 0 e 10, riprova");
    }
}

//consolo.log della funzione introducento un prompt richiedendo quindi all'utente la quantità di numeri da generare
//utilizzo parseInt per modificare il valore ricevuto in numero
//poichè il prompt dà sempre una stringa ed è necessario invece un numero intero
console.log(giveMeRandom(parseInt(prompt("Inserisci il numero di numeri random che vuoi (da 1 a 10): "))));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

//creo una funzione area con due parametri (l1, l2)
function area(l1, l2) {
    if (isNaN(l1) || isNaN(l2)) {
        return "Almeno uno dei due numeri inseriti non è valido, riprova";
    }
    else if (l1 > 0 && l2 >0) { //pongo la condizione che entrambi i numeri siano positivi
    let areaRettangolo = l1 * l2;   //se vera la condizione allora effettua il prodotto
    return areaRettangolo;  //e restituisci il risultato

    } else {    //altrimenti stampa messaggi di errore
        console.log("I valori inseriti non sono validi per ottenere un'area di un rettangolo, riprova");
    }
}

//richiedo all'utente il valore dei lati del rettangolo
console.log(area(parseInt(prompt("Inserisci il valore di uno dei due lati")), parseInt(prompt("Inserisci l'altro valore di uno dei due lati"))));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

//creo la funzione crazyDiff con un parametro (numeroFornito)
function crazyDiff(numeroFornito) {
    let differenzaAssoluta = 0; //definisco una variabile differenzaAssoluta in cui effettuare l'operazione
    
        //valuto che sia stato inserito un numero valido
        if (isNaN(numeroFornito) || typeof numeroFornito !== 'number') {
            return "Il numero inserito non è valido, riprova!";
        } else {
            //per effettuare la differenza assoluta (valore assoluto di un differenza) utilizzo la funzione Math.labs()
            //con all'interno la differenza che vogliamo sia assoluta
            differenzaAssoluta = Math.abs((numeroFornito - 19));

            //applico la condizione richiesta dalla traccia:
            //cioè se il risultato è maggiore di 19
            if(differenzaAssoluta > 19) {
                return differenzaAssoluta * 3; //allora si applica il prodotto 
            } else {    // altrimenti si restituisce l'operazione precedente
                return differenzaAssoluta;
            }
        }
    }

//come richiedo richiamo la funzione e richiedo il numeroFornito all'utente
//effettuando di conseguenza la conversione da prompt (19stringa) in numero con parseInt
console.log(crazyDiff(parseInt(prompt("Inserire un numero: "))));

//VERSIONE CON OPERATORE TERNARIO

function crazyDiff(numeroFornito) {
    let differenzaAssoluta = Math.abs(numeroFornito - 19);
    return (differenzaAssoluta > 19) ? differenzaAssoluta * 3 : differenzaAssoluta; //OPERATORE INSERITO IN QUESTO PUNTO
}

console.log(crazyDiff(parseInt(prompt("Inserire un numero:"))));

// VERSIONE CORTA
function crazyDiff(numeroFornito) {
    return Math.abs(numeroFornito - 19) > 19? Math.abs(numeroFornito - 19) * 3 : Math.abs(numeroFornito - 19);
}

console.log(crazyDiff(parseInt(prompt("Inserire un numero"))));


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

//Creo una funzione codify con un parametro (stringa)
function codify(stringa) {

    
    //utilizzo la funzione startsWith che ha la funzione di definire se un oggetto comincia con qualcosa
    //(scritta tra parentesi) per poi dare un valore booleano,
    //nel senso che: oggetto comincia con "oggetto indicato in parentesi"?
    //vero o falso
        if (stringa.startsWith('code')) {
            return stringa; //quindi se vero return strringa
        } else { //altrimendi aggiungi "code" all'inizio della stringa
            return "code " + stringa;
        }
    } 

//applico il prompt per richiedere la stringa da verificare all'utente 
//(prompt dà sempre una stringa e quindi basta così)
console.log(codify(prompt("Inserisci una stringa")))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

//creo una funzione check3and7 con un parametro (numeroInteroPositivo)
function check3and7(numeroInteroPositivo) {

    //effettuo un controllo: verifico che il valor inserito sia un numero
    if (isNaN(numeroInteroPositivo)) { //se è vero che è isNaN, cioè se è vero che non è un numero
        return "Il numero inserito non è valido"; //allora stampa errore
    } else {

    //altrimenti se
    // la divisione per 3 da resto nullo (per cui è divisibile per 3)
    //oppure la divisione per 7 dà resto nullo (per cui è divisibile per 7)
    return numeroInteroPositivo % 3 == 0 || numeroInteroPositivo % 7 == 0
       
    }
}

//richiedo il valore dall'utente,
//dato che mi serve un numero,
//uso parseInt per invertire la stringa che genera prompt in valore numerico
console.log(parseInt(prompt("Inserire un numero")));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

//creo una funzione cutString con un parametro (words)
function cutString (words) {

    //volendo eliminare due caratteri dalla stirnga ho necessità di ricevere una stringa più lunga di due caratteri
    //per cui prima verifico che questa sia abbastanza grande
    if (words.length >= 2) {
    //se abbastanza lunga elimino il primo carattere
    //inoltre accorcio la stringa di un indice (eliminando quindi l'ultimo carattere della stringa come richiesto)    
        return words.slice(1, -1); 
    } else { //altrimenti restituisci una stringa di errore
        return "Attenzione non si può effettuare l'operazione, la stringa è troppo corta, riprova utilizzando una stringa più lunga";
    }

}

console.log(cutString(prompt("Inserisci una stringa:")));