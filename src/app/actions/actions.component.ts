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

  pendingStart = false;
  counter = 1;

  constructor() {
  }

  startGame(): void {
    this.counter = 1;
    this.pendingStart = true;

    setTimeout(() => {
      this.counter = 2;
      setTimeout(() => {
        this.counter = 3;
        setTimeout(() => {
          this.pendingStart = false;
          this.startGameEventEmitter.emit();
          this.start = true;
        }, 1000);
      }, 1000);
    }, 1000);
  }

  stopGame(): void {
    this.stopGameEventEmitter.emit();
    this.start = false;
  }

  showResultsTable(): void {
    this.showResultsTableEventEmitter.emit();
  }
}
