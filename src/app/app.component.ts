import {AfterViewInit, Component, OnInit} from '@angular/core';
import {times, random, round} from 'lodash';

class Pulse {
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
export class AppComponent implements OnInit, AfterViewInit {
  options = [1, 2, 3, 4, 5, 6];
  pulses: Array<Pulse> = [];
  start = false;
  startTime: Date;
  stopTime: Date;
  selectedOption;
  showResults = false;
  seconds = 0;

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  selectPulseNumber(option: number): void {
    const pulses: Array<Pulse> = times(option - 1, String).map(opt => new Pulse(random(40, 80)));
    this.pulses = [new Pulse(60)].concat(pulses);
    this.selectedOption = option;
  }

  startGame(): void {
    this.startTime = new Date();
    this.showResults = false;
  }

  stopGame(): void {
    this.stopTime = new Date();
    this.seconds = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
    this.pulses.forEach(p => p.result = round(this.seconds / (60 / p.speed), 2));
    console.log(this.pulses);
    this.showResults = true;
  }
}
