import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ContactComponent } from '../contact/contact.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() contact: EventEmitter<boolean> = new EventEmitter;
  isContact: boolean = false;
  curLink: string = "#main";
  scrolled: boolean;
  collapse: HTMLElement;
  nav: HTMLElement;


  constructor(
   private app: AppService
  ) { }

  ngOnInit() {

    this.collapse = document.getElementById("collapse")    

    this.nav = document.getElementsByTagName('nav')[0];

    // for css class active
    this.app.activator(this.nav).subscribe((e:HTMLAnchorElement) => {
      this.curLink = e.hash
    })
    
    // css class active activator
    this.app.emitter(window,'scroll').subscribe(
      (e) => {
      if (window.pageYOffset > 100) {       
        this.scrolled = true;
      } else {
        if (this.scrolled) {
          delete this.scrolled
        }
      }
    })
    
    this.app.emitter(window, 'resize').subscribe(() => {
      if (window.innerWidth > 567) {
        this.collapse.style.display = 'flex';
      } else {
        this.collapse.style.display = '';
      }
    })
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

    this.isContact ? 
      document.body.style.overflowY = "hidden"
    :
      document.body.style.overflowY = "auto"
    
  }

}