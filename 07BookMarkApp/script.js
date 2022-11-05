const namebox = document .getElementById("name")
const webbox = document .getElementById("web")
const add = document .getElementById("add")
 const element = document.getElementById("bookmarks");
let deletebtn = document.querySelector("  .delete");

add.addEventListener("click", () => {

    let name = namebox.value;
    let web = webbox.value;
let deletebtn = document.querySelector("  .delete");

    if(name!== ""  && web!== ""){
      // a tag
      let tag = document.createElement("a");
      let text = document.createTextNode(name);
      tag.href = web;
      tag.appendChild(text);
      tag.target = "_blank"

      //button tag
      let btns = document.createElement("button");
      let btntxt = document.createTextNode("delete");

      btns.appendChild(btntxt);
      btns.classList.add("delete");

      // div

      let div = document.createElement("div");
      div.classList.add("bookmark");
      div.appendChild(tag);
      div.appendChild(btns);

      // adding to bookmarks
      element.appendChild(div);

      namebox.value = "";
      webbox    .value = "";
    }
   else{
    alert("please enter valid entry")
   }


 

})


  deletebtn.addEventListener("click", () => {
    console.log("delete");
  });



