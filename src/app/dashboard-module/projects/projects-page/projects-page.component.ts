import { ProjectstatisticsService } from "./../../../services/projectstatistics.service";
import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.css"]
})
export class ProjectsPageComponent implements OnInit {
  teams: { title: string; number: number }[] = [
    { title: "dev", number: 5 },
    { title: "marketing", number: 13 },
    { title: "Q&A", number: 2 },
    { title: "Q&A", number: 2 },
    { title: "Q&A", number: 2 },
    { title: "Q&A", number: 2 },
    { title: "Design", number: 5 }
  ];
  ChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    mainAspectRatio: false
  };
  lineChartData: { data: number[]; label: string }[] = [
    {
      data: [0, 10, 21, 32, 49, 66, 84, 103],
      label: "completed tasks"
    }
  ];
  lineChartLabels: Array<string> = [
    "0",
    "sprint 1",
    "sprint 2",
    "sprint 3",
    "sprint 4",
    "sprint 5",
    "sprint 6",
    "sprint 7"
  ];
  lineChartType: string = "line";
  lineChartColors: Color[] = [
    {
      backgroundColor: "#77dd77",
      borderColor: "#77dd77",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  doughnutChartLabels: string[] = [
    "dev team",
    "Design Team",
    "Q&A",
    "marketing"
  ];
  doughnutChartData: number[] = [38, 12, 36, 20];
  doughnutChartType: string = "doughnut";
  pieChartType: string = "pie";
  constructor(
    private projectService: ProjectstatisticsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(localStorage.getItem("token"));
    this.projectService.getProjectInfos("6").subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
  }
  chartHovered(e: any): void {
    console.log(e);
  }
  chartClicked(e: any): void {
    console.log(e);
  }
}
