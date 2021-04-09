import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Reponse {
  time: { updated: string };
  bpi: {
    USD: {
      code: string;
      rate: string;
      rate_float: number;
    };
    BRL: {
      code: string;
      rate: string;
      rate_float: number;
    };
  };
}
@Injectable()
export class BitcoinService {
  currentResponse: Reponse;
  updateList: Array<Reponse> = [];

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Reponse>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
      .subscribe(data => {
        if (!this.currentResponse) {
          this.updateList.push(data);
        } else if (
          data.bpi.USD.rate_float !== this.currentResponse.bpi.USD.rate_float
        ) {
          this.updateList.push(data);
        }
        this.currentResponse = data;
      });
  }
}
