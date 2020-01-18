import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IgxGridComponent} from 'igniteui-angular';
import {DATA, TASKS} from '../../Shared/data';
import {SprintModel} from '../../models/Sprint.model';
import * as $ from 'jquery';

enum DragIcon {
  DEFAULT = 'drag_indicator',
  ALLOW = 'add'
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  public data1: any[];
  public data2: any[];

  sprint: SprintModel;
  bShowSprintEditorPopup = false;
  sprints = [{
    name: 'Sprint 1'
  }];
  @ViewChild('sourceGrid', {read: IgxGridComponent, static: true}) public sourceGrid: IgxGridComponent;
  @ViewChild('targetGrid', {read: IgxGridComponent, static: true}) public targetGrid: IgxGridComponent;

  constructor() {
  }

  ngOnInit(): void {
    this.data1 = TASKS;
    this.data2 = [];
    this.sprint = new SprintModel('Sprint 1', '01/01/2020', '15/01/2020', []);
  }

  public onRowDragEnd(args) {
    args.animation = true;
  }

  public onDropAllowed(args) {
    this.targetGrid.addRow(args.dragData.rowData);
    this.sourceGrid.deleteRow(args.dragData.rowID);
  }

  public onEnterAllowed(args) {
    this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
  }

  public onLeaveAllowed(args) {
    this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
  }

  private changeGhostIcon(ghost, icon: string) {
    if (ghost) {
      const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
      if (currentIcon) {
        currentIcon.innerText = icon;
      }
    }
  }

  showDropDown() {
    if ($('#dropdownMenuButton').ariaExpanded) {
      $('#dropdownMenuButton').classes.push('show');
      $('#dropdownMenuButton').ariaExpanded = false;
    } else {
      $('#dropdownMenuButton').ariaExpanded = true;
      $('#dropdownMenuButton').removeClass('show');
    }
  }

  displaySprintEditorPopup(newState = false) {
    this.bShowSprintEditorPopup = newState;
  }
}

