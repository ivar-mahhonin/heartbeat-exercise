import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {HeartbeatComponent} from './heartbeat/heartbeat.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeartbeatComponent],
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
