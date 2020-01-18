import {htmlAstToRender3Ast} from '@angular/compiler/src/render3/r3_template_transform';
import {SprintsSelectorComponent} from '../sprints-selector/sprints-selector.component';
import {Component, OnInit} from '@angular/core';
import {Ng2SmartTableModule, LocalDataSource} from 'ng2-smart-table';
import {Task} from 'src/models/Task';
import {TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {
  loading: boolean = false;
  projectId: string = '1';
  sprintsList: { value: string; title: string }[] = [];
  settings: any;
  data: Task[];
  temp: Task[];
  taskStates = ['Pending', 'In Progress', 'Done'];
  source: LocalDataSource;

  constructor(private taskService: TasksService) {
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.loading = true;
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

    if (window.confirm('Are you sure you want to save?')) {
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
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    var task;
    var data = event.newData;
    if (window.confirm('Are you sure you want to create?')) {
      this.loading = true;
      task = new Task(
        data.id,
        data.title,
        data.priority,
        this.taskStates[0],
        data.started,
        '',
        data.sprint
      );
      this.taskService.addTask(task, this.projectId).subscribe(
        response => {
          console.log(response.taskID);
          task.setid(response.taskID);
          console.log(task);
          this.data.unshift(task);
          this.source = new LocalDataSource(data);
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

  ngOnInit() {
    this.data = [
      new Task(
        1,
        'Task 1',
        '3',
        this.taskStates[1],
        '12/12/19',
        '13/12/19',
        '2'
      ),
      new Task(
        2,
        'Task 2',
        '3',
        this.taskStates[1],
        '12/12/19',
        '13/12/19',
        '2'
      ),
      new Task(
        3,
        'Task 3',
        '3',
        this.taskStates[2],
        '12/12/19',
        '13/12/19',
        '2'
      ),
      new Task(
        4,
        'Task 4',
        '3',
        this.taskStates[0],
        '12/12/19',
        '13/12/19',
        '2'
      ),
      new Task(
        5,
        'Task 5',
        '3',
        this.taskStates[3],
        '12/12/19',
        '13/12/19',
        '2'
      ),
      new Task(
        6,
        'Task 6',
        '3',
        this.taskStates[1],
        '12/12/19',
        '13/12/19',
        '2'
      )
    ];
    this.source = new LocalDataSource(this.data);
    this.sprintsList = [
      {value: '1', title: '1'},
      {value: '2', title: '2'},
      {value: '3', title: '3'},
      {value: '4', title: '4'}
    ];
    this.temp = this.data;
    this.settings = {
      mode: 'externel',
      defaultStyle: false,
      attr: {
        class: 'responstable' // this is custom table scss or css class for table
      },
      editor: {
        type: 'list'
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
        columnTitle: ''
      },
      columns: {
        title: {
          title: 'title',
          filter: false
        },
        priority: {
          title: 'priority',
          filter: false,
          editor: {
            type: 'list',
            config: {
              selectText: 'Select',
              list: [
                {value: '1', title: '1'},
                {value: '2', title: '2'},
                {value: '3', title: '3'},
                {value: '4', title: '4'},
                {value: '5', title: '5'}
              ]

              // renderComponent: SprintsSelectorComponent
            }
          }
        },
        state: {
          title: 'State',
          filter: false,

          defaultValue: this.taskService[0],
          editor: {
            type: 'list',
            config: {
              selectText: 'Select',
              list: [
                {value: this.taskStates[0], title: this.taskStates[0]},
                {value: this.taskStates[1], title: this.taskStates[1]},
                {value: this.taskStates[2], title: this.taskStates[2]}
              ]
            }
          }
        },
        started: {
          title: 'started at ',
          filter: false
        },
        finished: {
          title: 'finished at ',
          filter: false
        },
        sprint: {
          title: 'sprint',
          filter: false,
          // width:25%,
          editor: {
            type: 'list',
            config: {
              selectText: 'Select',
              list: this.sprintsList
            }
          }
        }
      }
    };
    console.log(this.source);
  }
}
