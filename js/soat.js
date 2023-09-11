const oclok = document.querySelector(".clock");

setInterval(() => {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var time = hours + ":" + (minutes < 10 ? "0" : "") + minutes +  ":" +  (seconds < 10 ? "0" : "") + seconds;
  oclok.innerHTML = time;
}, 1000);
