import { Component, OnInit } from "@angular/core";
import { Ng2SmartTableModule, LocalDataSource } from "ng2-smart-table";
import { Task } from "src/models/Task";
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: "app-tasks-page",
  templateUrl: "./tasks-page.component.html",
  styleUrls: ["./tasks-page.component.css"]
})
export class TasksPageComponent implements OnInit {
  projectId: string = "1";
  sprintsList: { value: string; title: string }[] = [];
  settings: any;
  data: Task[];
  temp: Task[];
  taskStates: string[];
  source: LocalDataSource;
  constructor(private taskService: TasksService) {}
  onDeleteConfirm(event) {
    if (window.confirm("Are you sure you want to delete?")) {
      this.taskService.deleteTask(event.data);
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
    var task;
    var data = event.newData;

    if (window.confirm("Are you sure you want to save?")) {
      task = new Task(
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
        },
        err => {
          console.log(err);
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    var task;
    var data = event.newData;
    if (window.confirm("Are you sure you want to create?")) {
      task = new Task(
        data.title,
        data.priority,
        this.taskStates[0],
        data.started,
        "",
        data.sprint
      );
      this.data.push(task);
      this.source.prepend(task);
      this.source = new LocalDataSource(data);
      this.taskService.addTask(task, this.projectId).subscribe(
        response => {
          console.log(response);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
    this.taskStates = ["Pending", "In Progress", "Done"];
    this.data = [
      new Task(
        "add this feature",
        "3",
        this.taskStates[1],
        "12/12/19",
        "13/12/19",
        "2"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task("remove ", "1", this.taskStates[2], "12/12/19", "13/12/19", "2"),
      new Task(
        "test this feature",
        "1",
        this.taskStates[2],
        "12/12/19",
        "13/12/19",
        "3"
      ),
      new Task(
        "prepare a Mock up",
        "1",
        this.taskStates[0],
        "12/12/19",
        "13/12/19",
        "4"
      )
    ];
    this.source = new LocalDataSource(this.data);
    this.sprintsList = [
      { value: "1", title: "1" },
      { value: "2", title: "2" },
      { value: "3", title: "3" },
      { value: "4", title: "4" }
    ];
    this.temp = this.data;
    this.settings = {
      mode: "externel",
      defaultStyle: false,
      attr: {
        class: "responstable" // this is custom table scss or css class for table
      },
      editor: {
        type: "list"
      },
      pager: {
        display: true,
        perPage: 10
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

              //renderComponent: SprintsSelectorComponent
            }
          }
        },
        state: {
          title: "State",
          filter: false,

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

              //renderComponent: SprintsSelectorComponent
            }
          }
        },
        started: {
          title: "started at ",
          filter: false
        },
        finished: {
          title: "finished at ",
          filter: false
        },
        sprint: {
          title: "sprint",
          filter: false,
          //width:25%,
          editor: {
            type: "list",
            config: {
              selectText: "Select",
              list: this.sprintsList

              //renderComponent: SprintsSelectorComponent
            }
          }
        }
      }
    };
  }
}
