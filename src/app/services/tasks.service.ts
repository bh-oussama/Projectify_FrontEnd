import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Task } from "src/models/Task";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class TasksService {
  constructor(private http: HttpClient, private router: Router) {}
  getTasks() {}
  addTask(task: Task, projectId: string) {
    var temp = {
      TaskName: task.title,
      TaskPriority: task.priority,
      TaskDescription: "",
      TaskStartedAt: task.started
    };

    return this.http.post<any>(
      "https://projectify-hh4.conveyor.cloud/" +
        "admin/createtask" +
        "/$projectID=" +
        "5" +
        "&sprintID=" +
        "7",
      temp
    );
  }
  deleteTask(task: Task) {}
  updateTask(task: Task) {
    var temp = {
      TaskID: task.id,
      TaskName: task.title,
      TaskPriority: task.priority,
      TaskDescription: "",
      TaskStartedAt: task.started
    };

    return this.http.post<any>(
      "https://projectify-hh4.conveyor.cloud/" + "admin/createtask",
      temp
    );
  }
}
