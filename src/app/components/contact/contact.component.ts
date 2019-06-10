import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewMesssage } from './message';
import { AppService } from 'src/app/app.service';
import { EmailService } from "../email.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {

  @Output() closeContact: EventEmitter<boolean> = new EventEmitter;

  message: NewMesssage;
  sending: boolean = false;

  top: number = 0; //pageYOffset
  form: HTMLFormElement;
  
  constructor(
    private app: AppService,
    private messenger:EmailService
  ) {}

  ngOnInit() {
    
    this.form = document.forms[0];

    this.app.emitter(window, 'scroll').subscribe(
      () => {        
        this.top = window.pageYOffset
      }
    )

    this.message = {
      from_add: 'tdkhonji@gmail.com',
      subject: 'learning phase 2',
      text: 'hello testing',
      html: '',
    }
  }

  // close contact state
  
  cancel(e?) {
    if (e) {
      if (e === "sending" || e.target.id == "contact") {
        this.closeContact.emit(false);
        document.body.style.overflowY = "auto";
      }
    } else {
      this.form.reset()
      this.closeContact.emit(false);
      document.body.style.overflowY = "auto";
    }
  }


  onSubmit() {

    this.sending = true;
    this.cancel('sending');
    // const msg = this.message;


    this.message.html = `<p>${this.message.text}</p>`;
    
    this.messenger.sendMail(this.message).subscribe((res) => {
      if (res) {
        console.log('message sent');
        console.log(res);
        this.sending = false;
        this.cancel();
      } else {
        console.log('oops, sumthing wrong happened');
      }
    })
  }
}
