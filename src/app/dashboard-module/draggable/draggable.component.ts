import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDragMove, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {DeveloperService} from '../../developer.service';
import {TaskModel} from '../../models/Task.model';
import {TASKS} from '../../Shared/data';
import {ProjectService} from '../../project.service';

declare var $: any;

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {
  tasks = [];
  new = TASKS;
  active = [];
  closed = [];

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    const task = new TaskModel();
    task.taskName = 'Task name';
    task.taskDescription = 'Task Description';
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
    this.projectService.setTaskNewState(task.taskID + '', task.taskState).subscribe();
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

