import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Config} from './Shared/Config';
import {FormGroup} from '@angular/forms';
import {ProjectModel} from './models/Project.model';

class Project {
  constructor(
    public ProjectName: string,
    public ProjectDescription: string,
    public ProjectState: string,
    public ProjectDate: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  addProject(projectForm: FormGroup, userID: string) {
    const p = new Project(
      projectForm.value.projectName,
      projectForm.value.projectDescription,
      projectForm.value.projectState,
      projectForm.value.projectDate
    );
    console.log(userID);
    return this.http.post<any>(Config.apiUrl + '/admin/createproject?userID=' + userID, p);
  }

  getAllProjects(userID: string) {
    return this.http.get(Config.apiUrl + '/admin/getprojectsperuser?userID=' + userID);
  }

  getProject(projectID: string) {
    return this.http.get(Config.apiUrl + '/admin/getproject?projectID=' + projectID);
  }
}
