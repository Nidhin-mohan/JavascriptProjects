
const textContent = document.getElementById("quote");
const author = document.getElementById("author");
getquote();

  async function getquote(){
  
   await fetch("https://api.quotable.io/random")
  .then((responce) => {
    console.log(responce);
    return responce.json();
  })

  .then((data) => {
    var quote = data.content;
    let authors = data.author;
   console.log('a', authors);
    textContent.innerText = quote;
    author.innerText = authors
  })

  .catch(() => {
    console.log("error");
  });


}

















