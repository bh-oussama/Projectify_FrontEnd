import { RegistrationFormComponent } from "./registration/registration-form/registration-form.component";
import { TasksPageComponent } from "./dashboard-module/task/tasks-page/tasks-page.component";
import { HomeComponent } from "./home-component/home.component";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ProjectsComponent } from "./projects-component/projects.component";
import { TasksComponent } from "./dashboard-module/tasks/tasks.component";

import { ProjectsPageComponent } from "./dashboard-module/projects/projects-page/projects-page.component";
import { MessagesListComponent } from "./dashboard-module/chat/messages-list/messages-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatPageComponent } from "./dashboard-module/chat/chat-page/chat-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: HomeComponent },
  { path: "register", component: RegistrationFormComponent },
  { path: "resetpassword", component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
