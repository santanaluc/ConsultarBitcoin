import { Injectable } from "@angular/core";
import { BitcoinService } from "./bitcoin.service";

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() {}

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        BitcoinService.update();
        return this.counter;
      }, 60000);
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
