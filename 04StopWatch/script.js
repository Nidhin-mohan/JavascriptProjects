// selecting all button
let start = document.getElementById("start")
let stop = document.getElementById("stop");
let reset = document.getElementById("reset")

//selecting display

let minutes = document.getElementById("min");
let secounds = document.getElementById("sec");
let millisecs = document.getElementById("msec");

   let timer = false;
   let hour = 0;
   let minute= 0;
   let secs = 0;
  let msecs = 0;
  let count = 0;


start.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stop.addEventListener("click", function () {
  timer = false;
});

reset.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minutes = 0;
  secs = 0;
  msecs = 0;
  count = 0;
  minutes.innerHTML = "00";
  secounds.innerHTML = "00";
  millisecs.innerHTML = "00";
 
});

function stopWatch() {
  if(timer) {
    count++
    if(count == 1000){
      msecs++;
      count=0;
      if(msecs == 100){
        secs++;
        msecs= 0;
        if (secs == 60) {
          minute++;
          secs = 0;
          if (minute == 60) {
            hour++;
            minute = 0;
          }
        }
      }
    }
  }
   millisecs.innerText = msecs;
   secounds.innerText = secs;
   minutes.innerText = minute;
  setInterval(stopWatch,100)
}





    
