var second = document.getElementById("second");
var msecond = document.getElementById("msecond");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timerdiv = document.getElementById("timer");
var sec = 0;
var count = 0;

var timer = false;

start.addEventListener("click", function () {
  timer = true;
  setTimeout(hidetimer, 2000);
  stopwatch();
});

stop.addEventListener("click", function () {
  timer = false;
  revealtimer();
});

reset.addEventListener("click", function () {
  timer = false;

  sec = 0;
  count = 0;

  second.textContent = "00";
  msecond.textContent = "00";
});

function stopwatch() {
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }

    if (sec == 60) {
      sec = 0;
    }

    var secString = sec;
    var countString = count;

    if (sec < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }
    second.textContent = secString;
    msecond.textContent = countString;
    setTimeout(stopwatch, 10);
  }
}
var number = function () {
  var n = Math.floor(Math.random() * 12 + 4);
  document.getElementById("number").innerHTML = "<span>" + n + "</span>";
  return n;
};
var x = new number();

function hidetimer() {
  timerdiv.style.display = "none";
  reset.style.display = "none";
  start.style.display = "none";
}
function revealtimer() {
  timerdiv.style.display = "";
  reset.style.display = "";
  start.style.display = "";
}
