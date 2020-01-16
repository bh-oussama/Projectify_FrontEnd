import { Component, OnInit, Input } from "@angular/core";
import { StatsCard } from "src/models/StatsCard";

@Component({
  selector: "app-stats-card",
  templateUrl: "./stats-card.component.html",
  styleUrls: ["./stats-card.component.css"]
})
export class StatsCardComponent implements OnInit {
  @Input() myData: StatsCard = {
    color: "#30a5ff",
    label: "Label",
    data: 500,
    icon: "fa-line-chart"
  };

  constructor() {}

  ngOnInit() {
    this.myData.icon += " fa fa-3x fa-fw";
  }
}
