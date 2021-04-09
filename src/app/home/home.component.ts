import { Component, Input, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Input() ra: String;
  @Input() name: String;

  constructor(public timer: TimerService) {
    this.timer.start(1000);
  }

  ngOnInit() {}
}
