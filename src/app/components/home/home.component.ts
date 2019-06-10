import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() contact: EventEmitter<boolean> = new EventEmitter;
  isContact: boolean = false;
  curLink: string = "#main"; //for css .active
  scrolled: boolean; // window has been scrolled
  collapse: HTMLElement; //collapseable section on nav
  nav: HTMLElement;


  constructor() { }

  ngOnInit() {

    this.collapse = document.getElementById("collapse");

    this.nav = document.getElementsByTagName('nav')[0];

    // for css class active
    this.activator(this.nav).subscribe((e: HTMLAnchorElement) => {
      this.curLink = e.hash
    });
    
    // toggle this.scrolled class property
    new AppComponent().emitter(window,'scroll').subscribe(
      (e) => {
        if (window.pageYOffset > 100) {       
          this.scrolled = true;
        } else {
          if (this.scrolled) {
            delete this.scrolled
          }
        }
      }
    )
    
    // reset collapse style if window was resized
    new AppComponent().emitter(window, 'resize').subscribe(
      () => {
        window.innerWidth > 567
          ? this.collapse.style.display = 'flex'
          : this.collapse.style.display = '';
      }
    )
  }

  togCollapse() {
    const colStyle = this.collapse.style
    
    if (colStyle.display == '') {
      colStyle.display = 'none'
    }

    colStyle.display === 'none' ?
      colStyle.display = 'flex' :
      colStyle.display = 'none'
    
  }

  contactMe() {
    this.isContact = true


    console.log(`${this.isContact}, opening form`);

    this.contact.emit(this.isContact);

    this.isContact
      ? document.body.style.overflowY = "hidden"
      : document.body.style.overflowY = "auto";
  }

  // toggle links for css .active
  activator(target: HTMLElement) {
    return new Observable((obvsever) => {

      const handler = (e) => {
        if (e.target.tagName == "I" || e.target.tagName == "A") {

          if (e.target.tagName == 'I') {
            obvsever.next(e.target.parentElement)
          } else {
            obvsever.next(e.target)
          }
        }
      };

      target.addEventListener('click', handler);

      return () => {
        target.removeEventListener('click', handler)
      }

    });
  }
}