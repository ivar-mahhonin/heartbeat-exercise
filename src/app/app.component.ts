import {Component} from '@angular/core';
import {times, random, round} from 'lodash';

export class Pulse {
  speed: number;
  result = 0;

  constructor(speed: number) {
    this.speed = speed;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: number[] = [1, 2, 3, 4, 5, 6];
  pulses: Array<Pulse> = [];
  start = false;
  startTime: Date;
  stopTime: Date;
  selectedOption;
  showResults = false;
  seconds = 0;
  pause = false;

  pendingStart = false;
  counter = 1;

  public selectPulseNumber(option: number): void {
    this.resetState();
    const pulses: Array<Pulse> = times(option - 1, String).map(opt => new Pulse(random(40, 100)));
    this.pulses = [new Pulse(60)].concat(pulses);
    this.selectedOption = option;
  }

  initStartCount(): void {
    this.counter = 1;
    this.pendingStart = true;
    this.showResults = false;

    const intervalId = setInterval(() => this.counter += 1, 1000);

    const callback = () => {
      clearInterval(intervalId);
      this.pendingStart = false;
      this.startGame();
    };

    setTimeout(callback.bind(this), 3000);
    console.log(this.start);
  }

  public startGame(): void {
    this.start = true;
    console.log(this.start);
    this.selectPulseNumber(this.selectedOption);
    this.startTime = new Date();
    this.showResults = false;
    console.log(this.start);
  }

  public stopGame(): void {
    this.start = false;
    this.stopTime = new Date();
    this.seconds = round((this.stopTime.getTime() - this.startTime.getTime()) / 1000, 1);
    this.pulses.forEach(p => p.result = round(this.seconds / (60 / p.speed), 0));
    this.pause = true;
  }

  public showResultsTable(): void {
    this.showResults = true;
  }

  private resetState(): void {
    this.stopTime = null;
    this.startTime = null;
    this.showResults = false;
    this.pulses = [];
    this.pause = false;
  }
}
