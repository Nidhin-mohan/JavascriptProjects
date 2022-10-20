let Display = document.querySelector(".display");
let year;
let month;
let day;

let btn = document.getElementById("btn")


btn.addEventListener(() => {
  year = document.getElementById("year").value;
 month = document.getElementById("month").value;
   day = document.getElementById("day").value;
})

// `"${year}-${month}-${day} "`
 setInterval(() => {
   // current date
   let today = new Date();

   let endDate = new Date(2022-2-27);
   let TimeLeft = endDate - today;

   // console.log(endDate.getTime());
   // console.log(today.getTime());
   // console.log(TimeLeft);

   let second = 1000;
   let minute = second * 60;
   let hour = minute * 60;
   let day = hour * 24;

   let toDay = Math.floor(TimeLeft / day);
   let toHour = Math.floor((TimeLeft % day) / hour);
   let toMinute = Math.floor((TimeLeft % hour) / minute);
   let toSecond = Math.floor((TimeLeft % minute) / second);

   Display.innerHTML = toDay + "d " + toHour + "hrs " + toMinute + "min " + toSecond + "sec";
   console.log("hi");
 },1000)


// console.log( ` day ${toDay}  hour ${toHour} minute ${toMinute} second ${toSecond}`);






  
