import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.scss']
})
export class HeartbeatComponent implements OnInit {
  @Input() speed: number;
  @Input() pause = false;

  constructor() {
  }

  ngOnInit() {
  }

}
