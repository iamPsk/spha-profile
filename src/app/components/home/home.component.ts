import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

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
      this.curLink = e.hash;
    })
    
    this.app.emitter(window,'scroll').subscribe(
      () => {

        // set current link for .active
      this.curLink = window.location.hash

      if (window.scrollY > 100) {       
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
    this.contact.emit(!this.isContact);

    if (!this.isContact) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"      
    }
  }

}