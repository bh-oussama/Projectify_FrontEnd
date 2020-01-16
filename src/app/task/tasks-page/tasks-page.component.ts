import { Component, OnInit } from "@angular/core";
import { Ng2SmartTableModule, LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.css"]
})
export class TasksPageComponent implements OnInit {
  settings = {
    columns: {
      title: {
        title: "title",
        filter: false
      },
      priority: {
        title: "priority",
        filter: false
      },
      state: {
        title: "State",
        filter: false
      },
      started: {
        title: "started at ",
        filter: false
      },
      finished: {
        title: "finished at ",
        filter: false
      }
    }
  };

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {}
}
