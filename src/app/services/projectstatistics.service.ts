import { Config } from "./../Shared/Config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProjectstatisticsService {
  constructor(private http: HttpClient, private router: Router) {}
  getProjectInfos(projectID: string) {
    return this.http.get<any>(
      Config.apiUrl + "admin/getsprints?projectID=" + projectID
    );
  }
  getSprints(projectID: string) {
    return this.http.get<any>(
      Config.apiUrl + "/admin/getsprints?projectID=" + projectID
    );
  }
}
