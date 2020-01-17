import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../models/Project.model';
import {SprintModel} from '../models/Sprint.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  bIsUserLoggedIn = false;
  currentProject: ProjectModel;

  constructor() {
  }

  ngOnInit() {
    this.bIsUserLoggedIn = localStorage.getItem('token') !== undefined;
    this.currentProject = new ProjectModel();
    this.currentProject.name = 'Project Z';
    const sprint = new SprintModel('Sprint name');
    this.currentProject.sprints = [sprint, sprint, sprint, sprint, sprint, sprint, sprint, sprint, sprint, sprint, sprint];
    this.username = 'oussama';
  }
}
