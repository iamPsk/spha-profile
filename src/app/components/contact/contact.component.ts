import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Messsage } from './message';
import { EmailService } from '../email.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {

  @Input() top: number;
  @Output() isContact: EventEmitter<boolean> = new EventEmitter();

  private message: Messsage;
  private recipient: string = 'khonjelwayo@gmail.com';

  constructor(
    
  ) {}

  ngOnInit() {

    this.message = {
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
      priority: '',
      date: new Date()
    }

    // this.gmail.gets()

  }

  // close contact state
  
  close(form) {
    form.reset()
    this.isContact.emit(false);
  }

  // close contact state
  closer(e,form) {
    if (e.target.id === "contact") {
      form.reset();
      this.isContact.emit(false);
    }
  }

  //Send mail
  send(form) {
    const msg = this.message;

    msg.to = this.recipient;
    msg.html = `<p>${this.message.text}</p>`;
    msg.priority = 'high';
    msg.date = new Date();

    form.reset();

    // close contact state 
    this.isContact.emit(false);

  }
}
