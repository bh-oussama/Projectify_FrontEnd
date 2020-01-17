import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDragMove, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DeveloperService} from '../../developer.service';
import {TaskModel} from '../../models/Task.model';
declare var $: any;

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {
  tasks: TaskModel[] = [];
  new: TaskModel[] = [];
  active: TaskModel[] = [];
  closed: TaskModel[] = [];

  constructor(private developerService: DeveloperService) {
  }

  ngOnInit() {
    const task = new TaskModel();
    task.taskName = 'Task name'
    task.taskDescription = 'Task Description';
    this.active.push(task);
    this.active.push(task);
    this.active.push(task);
    /* this.developerService.getTasks().subscribe(
       (data: any) => {
         this.tasks = data.tasks;
       },
       (error) => {
         console.log(error);
       },
       () => {
         // const keys = Object.keys(this.tasks);
         for (const elt of this.tasks) {
           switch (elt.taskState) {
             case 'New' :
               this.new.push(elt);
               break;
             case 'Active' :
               this.active.push(elt);
               break;
             case 'Closed' :
               this.closed.push(elt);
               break;
           }
         }
       }
     );*/
  }

  updateTaskState(index: number, event: CdkDragDrop<TaskModel[]>, task: TaskModel) {
    switch (event.container.id) {
      case 'cdk-drop-list-0' :
        task.taskState = 'New';
        break;
      case 'cdk-drop-list-1' :
        task.taskState = 'Active';
        break;
      case 'cdk-drop-list-2' :
        task.taskState = 'Closed';
        break;
    }
  }

  drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

