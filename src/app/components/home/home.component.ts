import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleNav() {
    const ddNav = document.getElementById('dd-nav').style;
    ddNav.display === 'none' ?
      ddNav.display = 'flex' :
      ddNav.display = 'none'
  }
}
