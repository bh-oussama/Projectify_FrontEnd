import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProjectsComponent} from '../projects-component/projects.component';
import {ProjectTeamsComponent} from './project-teams/project-teams.component';
import {AuthGuard} from '../authentication/auth.gard';
import {TasksComponent} from './tasks/tasks.component';
import {ChatPageComponent} from './chat/chat-page/chat-page.component';
import {ProjectsPageComponent} from './projects/projects-page/projects-page.component';
import {TasksPageComponent} from './task/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard/tasks', pathMatch: 'full'},
      {path: 'projects', component: ProjectsPageComponent},
      {path: 'tasks', component: TasksComponent},
      {path: 'discussions', component: ChatPageComponent},
      {path: 'sprint', component: TasksPageComponent},
      {path: 'teams', component: ProjectTeamsComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
