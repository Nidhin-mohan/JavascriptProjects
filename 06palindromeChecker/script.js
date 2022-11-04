
let h1 = document.getElementById("h1")
let word = document.getElementById("text");
let btn = document.getElementById("btn");
let n = 9;



btn.addEventListener("click",() => {
let wordkey = word.value;
console.log(wordkey)

    for (i = 0; i <= n / 2; i++) {
   
       
    if(wordkey === "" ){
         h1.innerText = " Enter A string"; 
         break;
    }

       else if  (wordkey[i] == wordkey[n - 1 - i]) {
        console.log(" palindrom");
        h1.innerText = "It is A Palindrom"
       
        break;
      } else {
        console.log(" not palindrom");
        h1.innerText = "It not is A Palindrom";
        break;
      }
    }
})
