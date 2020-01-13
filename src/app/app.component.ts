import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  chronometer = '00:00:00';

  onIntervalIssued(issuedNumber: string) {
    this.chronometer = issuedNumber;
  }
}
