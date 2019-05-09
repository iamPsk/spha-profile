import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isContact: boolean = false;

  // windo.scrollY
  top: number;

  // for overflow
  bodyStyle = document.body.style

  contactMe(e) {
    // set contact state to either true or false
    this.isContact = e;

    // isContact ? set contact state : remove contact state
    if (e) {
      this.top = window.scrollY; 
      this.bodyStyle.overflow = 'hidden'
      console.log(this.top);
    } else {
      this.top = undefined;
      this.bodyStyle.overflow = 'auto'
    }

  }

  // Contate state init
  emailMe() {
    this.isContact = !this.isContact;
    this.top = 0;
    this.bodyStyle.overflow = 'hidden'
  }

  // scroll tobtop page
  takeMeHome() {
    window.scrollTo(0, 0);
  }
}
