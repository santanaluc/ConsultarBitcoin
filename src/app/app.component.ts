import { Component } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Lucas S. Santana da Silva";
  ra = "0050831911022";

  constructor(public bitcoinService: BitcoinService) {}

  updateBitCoinService() {
    this.bitcoinService.update();
  }
}
