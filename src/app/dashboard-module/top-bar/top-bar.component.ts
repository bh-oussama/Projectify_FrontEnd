import {Component, Input, OnInit} from '@angular/core';
import {NotificationModel} from '../../models/Notification.model';
import {ProjectService} from '../../project.service';
import {Router} from '@angular/router';

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  @Input('projectName') projectName;
  bShowNotifications = false;
  bShowProjects = false;
  notifications = [];
  notif = new NotificationModel();
  projects = [];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.notif.content = 'no notification to display.';
    this.notifications = [
      this.notif
    ];

    this.projectService.getAllProjects(localStorage.getItem('userID')).subscribe(
      (data) => {
        this.projects = data.result;
        console.log('projects downloaded: ' + this.projects);
        console.log(this.projects[0].projectName);
      },
      (error) => {
        console.log('an error occured while gettingp projects');
      },
      () => {
        console.log('done');
      }
    );


    document.querySelector('#projects').addEventListener('click', (e) => {
      this.bShowProjects = true;
      this.bShowNotifications = false;
    });
    document.querySelector("#notif").addEventListener("click", e => {
      this.bShowNotifications = true;
      this.bShowProjects = false;
    });

    document.addEventListener("click", e => {
      // if (
      //   e.target.id === "btn_projects" ||
      //   e.target.id === "btn_notifications" ||
      //   e.target.id === "projects" ||
      //   e.target.id === "notif"
      // ) {
      //   return;
      // }
      console.log("document clicked");
      this.bShowNotifications = false;
      this.bShowProjects = false;
    });
  }

  toggleNotificationsDisplay() {
    console.log("notifications icon clicked");
    this.bShowNotifications = !this.bShowNotifications;
  }

  toggleProjectsDisplay() {
    this.bShowProjects = !this.bShowProjects;
  }
}
