const startbtn = document.querySelector(".start");
const stopbtn = document.querySelector(".stop");
const resetbtn = document.querySelector(".reset");

let hrs = (min = sec = msec = 0),
  startTimer;

startbtn.addEventListener("click", () => {
  startTimer = setInterval(() => {
    startbtn.classList.add("start-active");
    stopbtn.classList.remove("start-active");
    msec++;
    if (msec == 100) {
      sec++;
      msec = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateTime();
  }, 10);
});
stopbtn.addEventListener("click", () => {
  startbtn.classList.remove("start-active");
  stopbtn.classList.add("start-active");
  clearInterval(startTimer);
});
resetbtn.addEventListener("click", () => {
  startbtn.classList.remove("start-active");
  stopbtn.classList.remove("start-active");
  clearInterval(startTimer);
  hrs = min = sec = msec = 0;
  updateTime();
});

function updateTime() {
  phrs = hrs < 10 ? "0" + hrs : hrs;
  pmin = min < 10 ? "0" + min : min;
  psec = sec < 10 ? "0" + sec : sec;
  pmsec = msec < 10 ? "0" + msec : msec;

  document.querySelector(".hrs").innerText = phrs;
  document.querySelector(".min").innerText = pmin;
  document.querySelector(".sec").innerText = psec;
  document.querySelector(".msec").innerText = pmsec;
}
