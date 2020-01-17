import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProjectsComponent} from '../projects-component/projects.component';
import {ProjectTeamsComponent} from './project-teams/project-teams.component';
import {AuthGuard} from '../authentication/auth.gard';
import {TasksComponent} from '../tasks/tasks.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard/tasks', pathMatch: 'full'},
      {path: 'projects', component: ProjectsComponent},
      {path: 'tasks', component: TasksComponent},
      {path: 'teams', component: ProjectTeamsComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
