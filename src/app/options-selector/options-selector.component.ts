import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-options-selector',
  templateUrl: './options-selector.component.html',
  styleUrls: ['./options-selector.component.scss']
})
export class OptionsSelectorComponent {
  @Input() selectedOption;
  @Input() options;

  @Output() selectOptionEventEmitter: EventEmitter<number> = new EventEmitter();

  selectPulseNumber(option): void {
    this.selectOptionEventEmitter.next(option);
  }
}
