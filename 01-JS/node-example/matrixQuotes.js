const movieQuote = require('popular-movie-quotes');
const matrixQuotes = movieQuote.getQuotesByMovie('matrix');
const randomQuote = Math.floor(Math.random() * matrixQuotes.length);
const p = document.querySelector('p');

console.log(movieQuote.getQuotesByMovie('matrix')[randomQuote]); //If present returns and array with all quotes of the matrix movie,
//else returns empty.
