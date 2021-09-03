const quoteContainer=document.getElementById("quotecontainer");
const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");
const twitterBtn=document.getElementById("twitter");
const newQuoteBtn=document.getElementById("new-quote");

// Mostra una nuova citazione

function newQuote () {
    let citazione = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    
    // Controllo se l'autore è null, e scrivo "Unknown" al posto di null.
    if(citazione.author === null)
    {
        authorText.textContent = "Unknown";
    }else
    {
        authorText.textContent = citazione.author;
    }

    //Controllo la lunghezza della citazione per determinare lo stile della pagina

    if(citazione.text.length > 120)
    {
        quoteText.classList.add('long-quote');
    }
    else
    {
        quoteText.classList.remove('long-quote')
    }
    
    quoteText.textContent = citazione.text;

}

// Twitta citazione

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); //Il secondo parametro serve per aprire la pagina in una nuova tab
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

//Aggiungo gli event listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);