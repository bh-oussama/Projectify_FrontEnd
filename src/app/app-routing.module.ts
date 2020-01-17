import { RegistrationFormComponent } from "./registration/registration-form/registration-form.component";
import { TasksPageComponent } from "./task/tasks-page/tasks-page.component";

import { ProjectsPageComponent } from "./projects/projects-page/projects-page.component";
import { MessagesListComponent } from "./chat/messages-list/messages-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatPageComponent } from "./chat/chat-page/chat-page.component";

const routes: Routes = [
  { path: "projects", component: ProjectsPageComponent },
  { path: "", component: RegistrationFormComponent },
  { path: "chat/:id", component: ChatPageComponent },
  { path: "tasks", component: TasksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
