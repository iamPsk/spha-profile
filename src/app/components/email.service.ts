import { Injectable } from '@angular/core';
import * as nodemailer from "nodemailer";


@Injectable({
  providedIn: 'root'
})
  
export class EmailService {

  private auth = {
    user: 'user@gmail.com',
    pass: 'Pass'
  }
  
  private transpoter = nodemailer.createTransport(
    {
      host: 'smtp.gmail.com',
      port: 467,
      secure: true,
      auth: this.auth
    }
  )

  constructor() { 
    
  }

  public gets() {
    console.log('til');
  }
}
