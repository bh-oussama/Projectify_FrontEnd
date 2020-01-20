import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-team-ticket',
  templateUrl: './team-ticket.component.html',
  styleUrls: ['./team-ticket.component.css']
})
export class TeamTicketComponent implements OnInit {

  @Input('team') team;
  members = [];

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.projectService.getMembersInTeam(localStorage.getItem('projectID'), this.team.teamID).subscribe(
      (data) => {
        // @ts-ignore
        this.members = data.result;
        console.log(this.members);
        console.log('getAllMembers:okay');
      },
      (error) => {
        console.log('getAllMembers:error:' + error);
      },
      () => {
        console.log('getAllMembers:done');
      }
    );
  }

  drop(event: CdkDragDrop<any, any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.projectService.addMemberToTeam(
        event.previousContainer.data[event.previousIndex].id,
        this.team.id
      ).subscribe();
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  updateTaskState(i: any, $event: CdkDragDrop<any>, newtask: any) {

  }
}
