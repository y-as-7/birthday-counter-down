let dayValue = document.getElementById("day");
let monthValue = document.getElementById("month");
let yearValue = document.getElementById("year");
let btn = document.getElementById("btn-start");
let login=document.getElementById("login")

let day = document.getElementById("dayselect");
let month = document.getElementById("monthselect");
let year=document.getElementById("yearselect");

let arrOfDays=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let arrOfMont = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max + 30;
  var years = [];

  for (var i = max; i <= min; i++) {
    years.push(i);
  }
  return years;
}

var years = generateArrayOfYears();



for(let i=0 ; i<arrOfDays.length ;i++){
    day.innerHTML += `
    <option value="${arrOfDays[i]}">${arrOfDays[i]}</option>
    `;
}

for (let i = 0; i < arrOfMont.length ; i++) {
  month.innerHTML += `
    <option value="${arrOfMont[i]}">${arrOfMont[i]}</option>
    `;
}

for (let i = 0; i < years.length; i++) {
  year.innerHTML += `
    <option value="${years[i]}">${years[i]}</option>
    `;
}


let global;
let message=document.getElementById("message");

 let timmer = setInterval(setTimer, 1000);

btn.onclick = () => {
  // console.log(dayValue.value, monthValue.value, yearValue.value);
  
  login.style.display = "none";
  document.querySelector(".timer").style.display="block"

  setTimer();
  timmer;


          if (global < 0) {
            clearInterval(timmer);
            message.innerHTML = `your birthday passed`;
            login.style.display = "block";
            document.querySelector(".timer").style.display = "none";
          } else {
            setInterval(setTimer, 1000);
            message.innerHTML = ``;

          }

};


let dayplace =document.getElementById("day-span");
let hourplace =document.getElementById("hour-span");
let minutesplace =document.getElementById("minute-span");
let secondplace =document.getElementById("second-span");


function setTimer() {


  let myDate = new Date(
    Number(year.value),
    arrOfMont.indexOf(month.value),
    Number(day.value),
    00,
    00,
    00
  );

  let currentDate = new Date();

  let diffDate = myDate - currentDate;
global=diffDate;
  //days remain
  let daycalc = diffDate / (1000 * 60 * 60 * 24);
  let days = Math.floor(daycalc);

  //hours remain
  let hourscalc = (daycalc - days) * 24;
  let hours = Math.floor(hourscalc);

  //minutes remain
  let minutescalc = (hourscalc - hours) * 60;
  let minutes = Math.floor(minutescalc);

  //seconds reamin
        let secondcalc = (minutescalc - minutes) * 60;
        let seconds = Math.floor(secondcalc);

    dayplace.innerHTML=days;
    hourplace.innerHTML=hours;
    minutesplace.innerHTML=minutes;
    secondplace.innerHTML=seconds;
    if (seconds<10) {
        secondplace.innerHTML = "0"+seconds;
    }
    if (minutes < 10) {
      minutesplace.innerHTML = "0" + minutes;
    }
    if (hours < 10) {
      hourplace.innerHTML = "0" + hours;
    }
    if (days < 10) {
      dayplace.innerHTML = "0" + days;
    }

    
       


}


let back =document.getElementById("back");

back.onclick=()=>{
     login.style.display = "block";
     document.querySelector(".timer").style.display = "none";
    clearInterval();
}






    

