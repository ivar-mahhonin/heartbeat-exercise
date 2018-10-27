import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.scss']
})
export class HeartbeatComponent {
  @Input() speed: number;
  @Input() pause = false;
}
