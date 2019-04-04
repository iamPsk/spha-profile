import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @Input() top: number;
  @Output() isContact: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  // close contact state
  close() {
    this.isContact.emit(false);
  }

  // close contact state
  closer(e) {
    if (e.target.id === "contact") {
      this.isContact.emit(false);
    }
  }
}
