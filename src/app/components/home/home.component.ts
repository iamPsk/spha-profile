import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() pTop: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  // tooggle navbar state
  toggleNav() {
    const ddNav = document.getElementById('dd-nav').style;
    ddNav.display === 'none' ?
      ddNav.display = 'flex' :
      ddNav.display = 'none'
  }

  // get ptop position
  pageLoc() {
    console.log('clicking');
    // console.log(this.pTop);
    // document.body.style.backgroundColor = '#000000'
    this.pTop.emit((window.scrollY).toString());
    document.body.style.overflowY =  'hidden'
  }
}
