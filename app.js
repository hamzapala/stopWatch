// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
// const mood = document.querySelector(".mood");
// function setTime() {
//     let realTime = new Date();
//     let realHour = realTime.getHours();
//     let realMinute = realTime.getMinutes();
//     let realSecond = realTime.getSeconds();
//     if (realHour >= 12) {
//         realHour -= 12;
//         mood.innerText = "PM"
//     } else{
//         mood.innerText = "AM"
//     }
//     hour.innerHTML = realHour.toString().padStart(2, "0") + ":";
//     minute.innerHTML = realMinute.toString().padStart(2, "0") + ":";
//     second.innerHTML = realSecond.toString().padStart(2, "0") + "&nbsp;";
// }
// setInterval(setTime, 1000);
let realTime = new Date();
let realSecond = (realTime.getMilliseconds()/10).toFixed(0);
console.log(realSecond);


const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const mili = document.querySelector(".mili");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
let myMinute = 0

stop.addEventListener("click", ()=>{
    minute.innerHTML = "00";
    second.innerHTML = "00";
    mili.innerHTML = "00";
    
})
start.addEventListener("click", ()=>{
    let myInterval = setInterval(() => {
        mili.innerHTML = ((Number(mili.innerText) + 1) % 100).toString().padStart(2, "0");
        if (mili.innerHTML == "00") {
            second.innerHTML = ((Number(second.innerText) + 1) % 60).toString().padStart(2, "0");
        }
       if (second.innerText == "59") {
           myMinute++;
        if ((myMinute % 100) == 0) {
            minute.innerHTML = (Number(minute.innerText) + 1).toString().padStart(2, "0");
        }
       }
    }, 10);
    start.style.display = "none";
    pause.style.display = "block";

    pause.addEventListener("click", ()=>{
        pause.style.display = "none";
        start.style.display = "block";
        clearInterval(myInterval);
    })
    stop.addEventListener("click", ()=>{
        clearInterval(myInterval);
        minute.innerHTML = "00";
        second.innerHTML = "00";
        mili.innerHTML = "00";
        pause.style.display = "none";
        start.style.display = "block";
    })
})
