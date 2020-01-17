import { Component, Input, OnInit } from "@angular/core";
import { NotificationModel } from "../../models/Notification.model";
import { ProjectModel } from "../../models/Project.model";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  @Input() projectName = "";
  bShowNotifications = false;
  bShowProjects = false;
  notifications = [];
  notif = new NotificationModel();
  projects = [];
  proj = new ProjectModel();

  constructor() {}

  ngOnInit() {
    this.notif.content = "some notification content.";
    this.notifications = [
      this.notif,
      this.notif,
      this.notif,
      this.notif,
      this.notif,
      this.notif
    ];

    this.proj.name = "some project";
    this.projects = [
      this.proj,
      this.proj,
      this.proj,
      this.proj,
      this.proj,
      this.proj,
      this.proj,
      this.proj
    ];

    document.querySelector("#projects").addEventListener("click", e => {
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
