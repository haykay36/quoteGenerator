let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


const apiURL = "https://quotes-api-self.vercel.app/quote" ;

let getQuote = () =>{
fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved quote
    console.log(data.content);
    console.log(data.author);
    quote.innerText = data.quote;
    author.innerText = data.author;
    
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
}


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote)