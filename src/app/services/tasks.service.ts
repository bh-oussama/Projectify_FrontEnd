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
  addTask(task: Task) {}
  deleteTask(task: Task) {}
  updateTask(task: Task) {}
}
