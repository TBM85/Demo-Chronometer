import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html'
})
export class ChronometerComponent implements OnInit {
  @Output() intervalIssued = new EventEmitter<string>();

  interval;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() { }

  ngOnInit() {
  }

  addTime() {
    const hoursSpace = (this.hours < 10) ? '0' + this.hours : this.hours;
    const minutesSpace = (this.minutes < 10) ? '0' + this.minutes : this.minutes;
    const secondsSpace = (this.seconds < 10) ? '0' + this.seconds : this.seconds;

    this.intervalIssued.emit(hoursSpace + ':' + minutesSpace + ':' + secondsSpace);
  }

  onStartTime() {
    this.interval = setInterval(() => {
      this.seconds++;
      this.seconds = this.seconds;

      if (this.seconds >= 60) {
          this.minutes++;
          this.seconds -= 60;
      }

      if (this.minutes >= 60) {
          this.hours++;
          this.minutes -= 60;
      }

      this.addTime();
    }, 1000);
  }

  onStopTime() {
    clearInterval(this.interval);
  }

  onRestartTime() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.addTime();

    clearInterval(this.interval);
  }
}
