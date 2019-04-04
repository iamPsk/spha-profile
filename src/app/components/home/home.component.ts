import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isContact: EventEmitter<boolean> = new EventEmitter;


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

  // init contact state
  contactMe() {
    this.isContact.emit(true);
  }
}
