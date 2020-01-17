import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../authentication/auth.interceptor';
import {ProjectTeamsComponent} from './project-teams/project-teams.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CollaboratorTicketComponent} from './collaborator-ticket/collaborator-ticket.component';
import {TeamTicketComponent} from './team-ticket/team-ticket.component';
import {TasksComponent} from '../tasks/tasks.component';
import {DraggableComponent} from './draggable/draggable.component';
import {ProjectEditorComponent} from '../project-editor/project-editor.component';
import {SprintEditorComponent} from './sprint-editor/sprint-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';
import {IgxButtonModule, IgxDragDropModule, IgxGridModule} from 'igniteui-angular';
import {NgxPopper} from 'angular-popper';


@NgModule({
  declarations: [
    ProjectTeamsComponent,
    TopBarComponent,
    NavbarComponent,
    CollaboratorTicketComponent,
    TeamTicketComponent,
    TasksComponent,
    DraggableComponent,
    DashboardComponent,
    SprintEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    IgxGridModule,
    IgxDragDropModule,
    IgxButtonModule,
    NgxPopper,
    CommonModule,
    DashboardRoutingModule,
    DragDropModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  exports: [
    ProjectTeamsComponent,
    TopBarComponent,
    NavbarComponent,
    CollaboratorTicketComponent,
    TeamTicketComponent,
    TasksComponent,
    DraggableComponent,
    DashboardComponent,
    SprintEditorComponent
  ],
})
export class DashboardModule {
}
