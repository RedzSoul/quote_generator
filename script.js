const quoteContainer=document.getElementById("quotecontainer");
const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");
const twitterBtn=document.getElementById("twitter");
const newQuoteBtn=document.getElementById("newquote");

// Mostra una nuova citazione

function newQuote () {
    let citazione = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    authorText.textContent = citazione.author;
    quoteText.textContent = citazione.text;

}

// let apiQuotes = []; //Variabile globale

// Prendo le citazioni dall'API

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';

//     try{
//         const response = await fetch(apiUrl); //Questa costante non sarà "popolata" finché non ho una risposta dalla fetch alle API
//         apiQuotes = await response.json();
//         newQuote();

//     }catch(error){
//         alert(error);
//         //Gestione dell'errore
//     }
// }

//Chiamo la funzione una volta caricata la pagina:

// getQuotes();

newQuote();