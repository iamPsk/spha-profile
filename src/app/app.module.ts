import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from './components/contact/contact.component';
import { EmailService } from './components/email.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {}


