import { Injectable } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(public bitcoinService: BitcoinService) {}

  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        if (this.counter % 5 == 0) {
          this.bitcoinService.update();
        }
        this.counter++;
      }, ms);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  getCount() {
    return this.counter;
  }

  clear() {
    this.stop();
    return (this.counter = 0);
  }
}
