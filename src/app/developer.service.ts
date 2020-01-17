import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Config} from './Shared/Config';
import {TaskModel} from './models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get<TaskModel[]>(Config.apiUrl + `/developer/gettasks`);
  }

  getProjectName(taskID: number) {
    return this.http.get(Config.apiUrl + `/developer/getprojectname?taskID=${taskID}`) ;
  }

  changeTaskState(taskID: number, taskState: string) {
    return this.http.put(Config.apiUrl + `/manager/ChangeTaskState?taskID=${taskID}`,
      `\"${taskState}\"`,
      { headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'})
      });
  }
}
