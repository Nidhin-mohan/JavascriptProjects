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
  let interval;             


start.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stop.addEventListener("click", function () {
  timer = false;
   clearInterval(interval); // clear interval
});

reset.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minutes = 0;
  secs = 0;
  msecs = 0;
  count = 0;
   minutes.innerText = "00";
  secounds.innerHTML = "00";
  millisecs.innerHTML = "00";
   clearInterval(interval); // clear interval
 
});

function stopWatch() {
  if (timer) {
    msecs++;

    if (msecs == 99) {
      secs++;
      msecs = 0;
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
  millisecs.innerText =  msecs < 10 ?  '0'+ msecs : msecs;
  secounds.innerText =  secs < 10 ? '0' + secs : secs;
  minutes.innerText =  minute < 10 ? '0' + minute : minute;
  clearInterval(interval); // clear interval
  interval = setInterval(stopWatch, 10);

}





    
