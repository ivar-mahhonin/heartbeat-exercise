import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {HeartbeatComponent} from './heartbeat/heartbeat.component';
import {FormsModule} from '@angular/forms';
import { ResultsTableComponent } from './results-table/results-table.component';
import { OptionsSelectorComponent } from './options-selector/options-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartbeatComponent,
    ResultsTableComponent,
    OptionsSelectorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
