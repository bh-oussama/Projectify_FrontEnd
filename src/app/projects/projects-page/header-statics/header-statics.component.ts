import { StatsCard } from "src/models/StatsCard";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-statics",
  templateUrl: "./header-statics.component.html",
  styleUrls: ["./header-statics.component.css"]
})
export class HeaderStaticsComponent implements OnInit {
  icons: string[] = [
    "far fa-users",
    "fal fa-user",
    "fas fa-check-circle",
    "fas fa-tasks"
  ];
  labels: string[] = [
    "teams",
    "members",
    "completed tasks",
    "completed sprints"
  ];
  stats: number[] = [5, 78, 215, 6];
  colors: string[] = ["#01b80a", "#fdb25e", "#fec80f", "#84d4eb"];
  statcards: Array<StatsCard> = new Array<StatsCard>(4);
  constructor() {}

  ngOnInit() {
    for (var _i = 0; _i < this.icons.length; _i++) {
      console.log();
      this.statcards[_i] = {
        color: this.colors[_i],
        data: this.stats[_i],
        label: this.labels[_i],
        icon: this.icons[_i]
      };
    }
  }
}
