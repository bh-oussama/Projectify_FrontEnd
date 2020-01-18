import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../models/Project.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentProject: ProjectModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.currentProject = new ProjectModel('Projectify');
    // this.activatedRoute.params.subscribe(
    // (params: Params) => {
      // this.currentProject.projectID = params.id;
      // console.log(params.id);
      // }
      // );

      this.projectService.getProject(this.currentProject.projectID).subscribe(
        (data) => {
          // @ts-ignore
          console.log(data.result);
          // @ts-ignore
          this.currentProject = data.result;
          console.log(this.currentProject.projectID);
        },
        (error) => {
          console.log('error while getting profile.');
        },
        () => {
          console.log('done');
        }
      );
    };
  }
