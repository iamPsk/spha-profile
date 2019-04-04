import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isContact: boolean = false;
  top: number;
  bodyStyle = document.body.style

  contactMe(e) {
    // set contact state to either true or false
    this.isContact = e;

    // isContact ? set contact state : remove contact state
    if (e) {

      this.top = window.scrollY; 
      this.bodyStyle.overflow = 'hidden'

    } else {

      this.top = undefined;
      this.bodyStyle.overflow = 'auto'
      
    }

  }
}
