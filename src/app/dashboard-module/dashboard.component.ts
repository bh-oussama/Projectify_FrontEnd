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
  currentProject: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    // (params: Params) => {
    // this.currentProject.projectID = params.id;
    // console.log(params.id);
    // }
    // );

    // this.currentProject = {
    //   projectID: '1',
    //   projectName: 'testProject'
    // };

    this.projectService.getProject(localStorage.getItem('projectID')).subscribe(
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

    const t1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const t2 = [1, 2, 4, 7, 9];
    const t3 = t1.filter(x => t2.filter(y => y === x).length === 0);
  }
}
