import { Config } from "./../Shared/Config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Task } from "src/models/Task";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class TasksService {
  url: string;
  constructor(private http: HttpClient, private router: Router) {
    this.url = Config.apiUrl + "/";
  }
  getTasks(projectID: number) {
    return this.http.get<any>(
      this.url + "admin/gettasks?projectID=" + projectID
    );
  }
  addTask(task: Task, projectId: string) {
    var temp = {
      TaskName: task.title,
      TaskPriority: task.priority,
      TaskDescription: "",
      TaskStartedAt: task.started
    };

    return this.http.post<any>(
      this.url +
        "admin/createtask" +
        "/?projectID=" +
        projectId +
        "&sprintID=" +
        "1",
      temp
    );
  }
  deleteTask(id: number) {
    return this.http.delete<any>(this.url + "admin/deletetask?taskID=" + id);
  }
  updateTask(task: Task) {
    var temp = {
      TaskID: task.id,
      TaskName: task.title,
      TaskPriority: task.priority,
      TaskDescription: "",
      TaskStartedAt: task.started,
      TaskState: task.state,
      TaskEndAt: task.finished,
      TaskSprintID: task.sprint
    };
    console.log("hi");
    console.log(task);

    return this.http.post<any>(this.url + "admin/updatetask", temp);
  }
}
