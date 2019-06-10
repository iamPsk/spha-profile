import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { NewMesssage } from "../models/message";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
  
export class EmailService { 

  postOpts = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  serverAdd: string = 'http://localhost:3000/mail';
  
  constructor(
    private client:HttpClient
  ) { 
    
  }

  public sendMail(message: NewMesssage) {
    return this.client.post<NewMesssage>(this.serverAdd, message, this.postOpts).pipe(
      catchError(err => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
    
  }
}
