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
        "/?projectID=" +
        "6" +
        "&sprintID=" +
        "2",
      temp
    );
  }
  deleteTask(id: number) {
    return this.http.delete<any>(
      "https://localhost:44361/admin/deletetask?taskID=" + id
    );
  }
  updateTask(task: Task) {
    var temp = {
      TaskID: task.id,
      TaskName: task.title,
      TaskPriority: task.priority,
      TaskDescription: "",
      TaskStartedAt: task.started
    };
    console.log("hi");
    console.log(task);

    return this.http.post<any>(
      "https://projectify-hh4.conveyor.cloud/" + "admin/updatetask",
      temp
    );
  }
}
