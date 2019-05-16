import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isContact: boolean;
  
  // scroll to top
  takeMeHome() {
    window.scrollTo(0, 0);
  }

  // init contact state
  contact(val:boolean) {
    this.isContact = val
  }
}
