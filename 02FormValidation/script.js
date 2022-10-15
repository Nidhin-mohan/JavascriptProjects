// const userName = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const error = document.querySelector(".error");
// const failureIcon = document.querySelector(".failure-icon  ");

// const successIcon = document.querySelector(".success-icon ");

// const form  = document.getElementById("form");


let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
  e.preventDefault();
   engine(username, 0, "Username cannot be blank");
   engine(email, 1, "Email cannot be blank");
   engine(password, 2, "Password cannot be blank");
 

});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};


