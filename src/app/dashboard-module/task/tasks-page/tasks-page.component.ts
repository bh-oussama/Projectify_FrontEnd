import { ProjectstatisticsService } from "./../../../services/projectstatistics.service";
import { Component, OnInit } from "@angular/core";
import { LocalDataSource, ServerDataSource } from "ng2-smart-table";
import { Task } from "src/models/Task";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.css"]
})
export class TasksPageComponent implements OnInit {
  loading: boolean = false;
  projectId: string = "1";
  sprintsList: { value: string; title: string }[] = [];
  settings: any;
  data: Task[];
  temp: Task[];
  taskStates = ["Pending", "In Progress", "Done"];
  source: LocalDataSource;

  constructor(
    private taskService: TasksService,
    private projectService: ProjectstatisticsService
  ) {}

  onDeleteConfirm(event) {
    if (window.confirm("Are you sure you want to delete?")) {
      this.loading = true;
      event.confirm.resolve();
      console.log(event);
      this.taskService.deleteTask(event.data.id).subscribe(
        resp => {
          console.log(resp);
          this.data.splice(this.data.indexOf(event.data), 1);
          this.source = new LocalDataSource(this.data);
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  onSearch(value) {
    this.data = this.temp;
    this.data = this.data.filter((t, i) => {
      return t.title.includes(value);
    });

    this.source = new LocalDataSource(this.data);
  }

  onSaveConfirm(event) {
    let task;
    let data = event.newData;

    if (window.confirm("Are you sure you want to save?")) {
      this.loading = true;
      task = new Task(
        data.id,
        data.title,
        data.priority,
        data.state,
        data.started,
        data.finished,
        data.sprint
      );

      //TO-DO : Implement this
      this.taskService.updateTask(task).subscribe(
        response => {
          console.log(response);
          this.data.forEach((el, i) => {
            if (el.id == data.id) {
              this.data[i] = task;
            }
          });
          this.source = new LocalDataSource(this.data);
          this.loading = false;
        },
        err => {
          this.loading = false;
          console.log(err);
        }
      );
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    var task;

    console.log(event);

    var data = event.newData;
    if (window.confirm("Are you sure you want to create?")) {
      this.loading = true;
      task = new Task(
        data.id,
        data.title,
        data.priority,
        this.taskStates[0],
        data.started,
        "",
        data.sprint
      );
      this.taskService.addTask(task, this.projectId).subscribe(
        response => {
          console.log(response.taskID);
          task.setid(response.taskID);
          console.log(task);
          this.loading = false;
          //this.data;
        },
        err => {
          console.log(err);

          this.loading = false;
        }
      );

      event.confirm.resolve(task);
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.data = [];
    this.sprintsList = [
      { value: "1", title: "1" },
      { value: "2", title: "2" },
      { value: "3", title: "3" },
      { value: "4", title: "4" }
    ];
    this.source = new LocalDataSource(this.data);
    // this.projectService.getSprints("1").subscribe(
    //   resp => {
    //     resp.result.forEach(element => {
    //       this.sprintsList.push({
    //         value: element.sprintID,
    //         title: element.sprintID
    //       });
    //     });
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    this.loading = true;
    this.taskService.getTasks(parseInt(this.projectId)).subscribe(
      resp => {
        console.log("hi"), console.log(resp);
        resp.result.forEach(element => {
          this.source.prepend(
            new Task(
              element.taskID,
              element.taskName,
              element.taskPriority,
              element.taskState,
              element.taskStartedAt,
              element.taskEndAt,
              element.sprintID
            )
          );
        });

        this.source.refresh();
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );

    this.temp = this.data;
    this.settings = {
      mode: "externel",
      defaultStyle: false,

      editor: {
        type: "list"
      },
      pager: {
        display: true,
        perPage: 6
      },

      delete: {
        confirmDelete: true,
        deleteButtonContent: '<i class="fas fa-trash fa fa-2x fa-fw"></i>'
      },
      add: {
        confirmCreate: true
      },
      edit: {
        editButtonContent:
          '<i class="far fa-edit fa fa-2x fa-fw" style="green"></i>',

        confirmSave: true
      },
      actions: {
        columnTitle: ""
      },
      columns: {
        title: {
          title: "title",
          filter: false
        },
        priority: {
          title: "priority",
          filter: false,
          editor: {
            type: "list",
            config: {
              selectText: "Select",
              list: [
                { value: "1", title: "1" },
                { value: "2", title: "2" },
                { value: "3", title: "3" },
                { value: "4", title: "4" },
                { value: "5", title: "5" }
              ]

              // renderComponent: SprintsSelectorComponent
            }
          }
        },
        state: {
          title: "State",
          filter: false,
          addable: false,
          defaultValue: this.taskService[0],
          editor: {
            type: "list",
            config: {
              selectText: "Select",
              list: [
                { value: this.taskStates[0], title: this.taskStates[0] },
                { value: this.taskStates[1], title: this.taskStates[1] },
                { value: this.taskStates[2], title: this.taskStates[2] }
              ]
            }
          }
        },
        started: {
          title: "started at ",
          filter: false
        },
        finished: {
          title: "finished at ",
          filter: false,
          addable: false
        },
        sprint: {
          title: "sprint",
          filter: false,
          // width:25%,
          editor: {
            type: "list",
            config: {
              selectText: "Select",
              list: this.sprintsList
            }
          }
        }
      }
    };
    console.log(this.source);
  }
}
