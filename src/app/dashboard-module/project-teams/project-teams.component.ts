import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/Project.model';
import {TeamModel} from '../../models/Team.model';
import {CollaboratorModel} from '../../models/Collaborator.model';
import {COLLABORATORS, DATA, TEAMS} from '../../Shared/data';

@Component({
  selector: 'app-project-teams',
  templateUrl: './project-teams.component.html',
  styleUrls: ['./project-teams.component.css']
})
export class ProjectTeamsComponent implements OnInit {

  data: ProjectModel;
  private team1: TeamModel;

  collaborators = COLLABORATORS;
  teams = TEAMS;

  constructor() {
  }

  ngOnInit() {
    this.data = new ProjectModel();
    this.data.name = 'Project Z';
    this.data.creationDate = '01/01/2020';
    this.data.description = 'no one knows';
    this.team1 = new TeamModel();
    this.team1.name = 'Design';
    this.team1.collaborators = COLLABORATORS;
    this.data.teams = [this.team1, this.team1, this.team1];
  }
}
