const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const mili = document.querySelector(".mili");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
let myMinute = 0
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
