import { Component, HostBinding } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gaia Naturelle';
  hideMenu = true;
  @HostBinding('attr.class') role = 'vbox viewport';
  constructor(public sharedService: SharedService) { }
  scrollToMenu() {
    if (!this.hideMenu) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
