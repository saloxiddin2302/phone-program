// var timer;
// var startTime;
// var elapsedTime = 0;
// var timerInterval;

// function startTimer() {
//   startTime = Date.now() - elapsedTime;
//   timer = document.getElementById("timer");
//   timerInterval = setInterval(updateTimer, 10);
// }

// function updateTimer() {
//   var currentTime = Date.now();
//   elapsedTime = currentTime - startTime;
//   var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
//   var seconds = Math.floor((elapsedTime / 1000) % 60);
//   var milliseconds = Math.floor((elapsedTime % 1000) / 10);
//   timer.innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
// }

// function formatTime(time) {
//   return time < 10 ? "0" + time : time;
// }

// function pauseTimer() {
//   clearInterval(timerInterval);
// }

// function resetTimer() {
//   clearInterval(timerInterval);
//   elapsedTime = 0;
//   timer.innerHTML = "00:00:00";
// }

// maniki yuqoridagi

// let watch = document.querySelector(".watch");
// let minut = document.querySelector(".part__minut");
// let second = document.querySelector(".part__second");
// let timerReset = document.querySelector(".timer__btn__reset");
// let paus = document.querySelector(".timer__paus");

// watch.innerHTML = Timer();

// function Timer() {
//   return `
//   <span class="part__minut">00</span>
//   <span class="time_part">:</span>
//   <span class="part__second">00</span>
//   <button type="button" class="timer__btn timer__paus">
//     <span class="material-icons"> play_arrow</span>
//   </button>
//   <button type="button" class="timer__btn timer__btn__reset">
//     <span class="material-icons"> timer</span>
//   </button>
  

//   `;
// }


// ????


class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
			<span class="timer__part timer__part--minutes">00</span>
			<span class="timer__part">:</span>
			<span class="timer__part timer__part--seconds">00</span>
			<button type="button" class="timer__btn timer__btn--control timer__btn--start">
				<span class="material-icons">play_arrow</span>
			</button>
			<button type="button" class="timer__btn timer__btn--reset">
				<span class="material-icons">timer</span>
			</button>
		`;
  }
}

new Timer(
	document.querySelector(".timer")
);