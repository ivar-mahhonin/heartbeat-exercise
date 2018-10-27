import {Component, Input} from '@angular/core';
import {Pulse} from '../app.component';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent {
  @Input() seconds: number;
  @Input() pulses: Array<Pulse>;
}
