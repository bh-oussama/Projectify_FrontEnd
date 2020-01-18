import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  bShowProjectCreationPopup = false;
  projects = [];

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.projectService.getAllProjects(localStorage.getItem('userID')).subscribe(
      (data) => {
        // @ts-ignore
        this.projects = data.result;
      },
      (error) => {
        console.log('error while getting profile.');
      },
      () => {
        console.log('done');
      }
    );
  }

  displayProjectCreationPopup(state = true) {
    this.bShowProjectCreationPopup = state;
  }
}
