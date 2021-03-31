import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BitcoinService } from "./bitcoin.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      }
    ])
  ],
  declarations: [AppComponent, HelloComponent, NavbarComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService]
})
export class AppModule {}
