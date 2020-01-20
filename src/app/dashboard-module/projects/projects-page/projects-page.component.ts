import { TasksService } from "src/app/services/tasks.service";
import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectstatisticsService } from "./../../../services/projectstatistics.service";
import { Route } from "@angular/compiler/src/core";
import { Task } from "src/models/Task";

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.css"]
})
export class ProjectsPageComponent implements OnInit {
  tasks: Task[] = [];
  projectId = 1;
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
      data: [0, 9, 21, 32, 49, 66, 84, 103],
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
    private taskService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  completedTasks: number = 0;
  ngOnInit() {
    this.taskService.getTasks(this.projectId).subscribe(
      resp => {
        console.log("hi"), console.log(resp);
        resp.result.forEach(element => {
          if (element.state === "Done") {
            this.completedTasks++;
            console.log(this.completedTasks);
          }
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
