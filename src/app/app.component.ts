import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pTop: number

  ptop(e) {
    this.pTop = Number(e);
    console.log('ptop vent init');
    console.log(this.pTop);
  }
  
}
