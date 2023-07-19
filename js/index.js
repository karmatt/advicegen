const randomQuoteBtn = document.querySelector(".quote__btn");

const getRandomQuote =  async () => {
    try {
        let response = await fetch("https://api.quotable.io/quotes/random");
        if (response.status === 200) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}
const renderQuote = async () => {
    const quoteAuthor = document.querySelector(".quote__author");
    const quoteTxt = document.querySelector(".quote__txt");
    let quotes = await getRandomQuote();
    console.log(quotes);
    quotes.forEach(quote => {
        quoteAuthor.textContent = quote.author;
        quoteTxt.textContent = quote.content;
    });
}
window.onload = renderQuote;
randomQuoteBtn.onclick = renderQuote;