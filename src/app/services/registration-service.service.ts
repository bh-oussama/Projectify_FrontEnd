import { User } from "./../../models/user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RegistrationServiceService {
  constructor(private http: HttpClient, private router: Router) {}
  register(user: User) {
    return this.http.post<any>(
      "https://projectify-hh4.conveyor.cloud/" + "user/register",
      user
    );
  }
}
