import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  @Input() start: boolean;
  @Input() showResults: boolean;
  @Input() stopTime: Date;

  @Output() startGameEventEmitter: EventEmitter<void> = new EventEmitter();
  @Output() stopGameEventEmitter: EventEmitter<void> = new EventEmitter();
  @Output() showResultsTableEventEmitter: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  startGame(): void {
    this.startGameEventEmitter.emit();
  }

  stopGame(): void {
    this.stopGameEventEmitter.emit();
  }

  showResultsTable(): void {
    this.showResultsTableEventEmitter.emit();
  }
}
