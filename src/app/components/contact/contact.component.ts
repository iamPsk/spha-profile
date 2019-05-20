import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Messsage } from './message';
import { AppService } from 'src/app/app.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {

  @Output() closeContact: EventEmitter<boolean> = new EventEmitter;

  message: Messsage;
  private recipient: string = 'khonjelwayo@gmail.com';

  top: number;
  form: HTMLFormElement;
  
  constructor(

    private app: AppService
    
  ) {}

  ngOnInit() {
    
    this.form = document.forms[0];

    this.app.emitter(window, 'scroll').subscribe(
      () => {
        this.top = window.scrollY
      }
    )

    this.message = {
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
      priority: '',
      date: new Date()
    }
  }

  // close contact state
  
  cancel(e?) {    
    if (e) {
      if (e.target.id == "contact") {
        this.closeContact.emit(false);
        document.body.style.overflow = "auto";
      }
    } else {
      this.form.reset()
      this.closeContact.emit(false);
      document.body.style.overflow = "auto";
    }
  }

  //Send mail
  send() {

    const msg = this.message;
    msg.to = this.recipient;
    msg.html = `<p>${this.message.text}</p>`;
    msg.priority = 'high';
    msg.date = new Date();

    this.form.reset();
  }

  
}
