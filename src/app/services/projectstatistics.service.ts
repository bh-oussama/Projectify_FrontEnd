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
      "https://localhost:44361/admin/getproject?projectID=" + projectID
    );
  }
}
