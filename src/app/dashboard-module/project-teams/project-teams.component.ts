import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/Project.model';
import {TeamModel} from '../../models/Team.model';
import {COLLABORATORS, TEAMS} from '../../Shared/data';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-project-teams',
  templateUrl: './project-teams.component.html',
  styleUrls: ['./project-teams.component.css']
})
export class ProjectTeamsComponent implements OnInit {

  data: ProjectModel;
  private team1: TeamModel;
  private team2: TeamModel;

  collaborators = COLLABORATORS;
  teams = TEAMS;
  new = TEAMS;
  bShowTeamCreationPopup = false;

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.data = new ProjectModel();
    this.data.name = 'Project Z';
    this.data.creationDate = '01/01/2020';
    this.data.description = 'no one knows';
    this.team1 = new TeamModel();
    this.team1.name = 'Design';
    this.team1.collaborators = COLLABORATORS;
    this.team2 = new TeamModel();
    this.team2.name = 'Design';
    this.team2.collaborators = COLLABORATORS;
    this.data.teams = [this.team1, this.team1, this.team1];
    console.log(this.team1);

    this.projectService.getAllMembers().subscribe(
      (data) => {
        // @ts-ignore
        // this.collaborators = data.result;
        console.log(this.collaborators);
        console.log('getAllMembers:okay');
      },
      (error) => {
        console.log('getAllMembers:error');
      },
      () => {
        console.log('getAllMembers:done');
      }
    );

    this.projectService.getAllTeams(localStorage.getItem('projectID')).subscribe(
      (data) => {
        // @ts-ignore
        // this.teams = data.result;
        console.log('getAllTeams:okay:' + this.teams);
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
      this.projectService.removeMemberFromTeam(
        event.container.data[event.previousIndex].id,
        event.previousContainer.element.nativeElement.id
      );
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  // tslint:disable-next-line:max-line-length
  updateTaskState(i: number, $event: CdkDragDrop<any>, newtask: { name: string; collaborators: ({ firstName: string; lastName: string } | { firstName: string; lastName: string })[] } | { name: string; collaborators: { firstName: string; lastName: string }[] }) {

  }

  displayTeamCreationPopup(newState = false) {
    this.bShowTeamCreationPopup = newState;
  }
}
