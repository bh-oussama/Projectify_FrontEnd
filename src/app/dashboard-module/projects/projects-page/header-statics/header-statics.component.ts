import { ProjectstatisticsService } from "./../../../../services/projectstatistics.service";
import { StatsCard } from "src/models/StatsCard";
import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Task } from "src/models/Task";

@Component({
  selector: "app-header-statics",
  templateUrl: "./header-statics.component.html",
  styleUrls: ["./header-statics.component.css"]
})
export class HeaderStaticsComponent implements OnInit {
  @Input() completedTasksNbr: number = 15;
  show: boolean = false;
  nbrSprints: number = 2;
  icons: string[] = [
    "far fa-users",
    "fal fa-user",
    "fas fa-check-circle",
    "fas fa-tasks"
  ];
  labels: string[] = ["teams", "members", "completed tasks", "sprints"];
  stats: number[];
  colors: string[] = ["#01b80a", "#fdb25e", "#fec80f", "#84d4eb"];
  statcards: Array<StatsCard> = new Array<StatsCard>(4);
  constructor(private projectService: ProjectstatisticsService) {}

  ngOnInit() {
    this.projectService.getSprints("1").subscribe(resp => {
      this.nbrSprints = resp.result.length;
      console.log("nbr of sprints" + this.nbrSprints);
      this.statcards[4].data = this.nbrSprints;
    });
    this.stats = [5, 24, this.completedTasksNbr, this.nbrSprints];
    for (var _i = 0; _i < this.icons.length; _i++) {
      console.log();
      this.statcards[_i] = {
        color: this.colors[_i],
        data: this.stats[_i],
        label: this.labels[_i],
        icon: this.icons[_i]
      };
    }
    this.statcards[3].data = this.completedTasksNbr;
  }
}
