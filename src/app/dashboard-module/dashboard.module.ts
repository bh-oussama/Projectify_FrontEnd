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
import {TasksComponent} from './tasks/tasks.component';
import {DraggableComponent} from './draggable/draggable.component';
import {SprintEditorComponent} from './sprint-editor/sprint-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';
import {IgxButtonModule, IgxDragDropModule, IgxGridModule} from 'igniteui-angular';
import {NgxPopper} from 'angular-popper';
import {ChatPageComponent} from './chat/chat-page/chat-page.component';
import {ContactListComponent} from './chat/contact-list/contact-list.component';
import {GroupCardComponent} from './chat/group-card/group-card.component';
import {DirectChatCardComponent} from './chat/direct-chat-card/direct-chat-card.component';
import {MessagesListComponent} from './chat/messages-list/messages-list.component';
import {MessageComponentComponent} from './chat/message-component/message-component.component';
import {ProjectsPageComponent} from './projects/projects-page/projects-page.component';
import {StatsCardComponent} from './projects/projects-page/stats-card/stats-card.component';
import {HeaderStaticsComponent} from './projects/projects-page/header-statics/header-statics.component';
import {GraphComponent} from './projects/projects-page/graph/graph.component';
import {TeamCardComponent} from './projects/projects-page/team-card/team-card.component';
import {TasksPageComponent} from './task/tasks-page/tasks-page.component';
import {SprintsSelectorComponent} from './task/sprints-selector/sprints-selector.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {Ng2OdometerModule} from 'ng2-odometer';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ChartsModule} from 'ng2-charts';


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
    ChatPageComponent,
    ContactListComponent,
    GroupCardComponent,
    DirectChatCardComponent,
    MessagesListComponent,
    MessageComponentComponent,
    ProjectsPageComponent,
    StatsCardComponent,
    HeaderStaticsComponent,
    GraphComponent,
    TeamCardComponent,
    TasksPageComponent,
    SprintsSelectorComponent,
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
    NgMultiSelectDropDownModule.forRoot(),
    Ng2SmartTableModule,
    Ng2OdometerModule.forRoot(),
    AngularFontAwesomeModule,
    ChartsModule,
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
    ChatPageComponent,
    ContactListComponent,
    GroupCardComponent,
    DirectChatCardComponent,
    MessagesListComponent,
    MessageComponentComponent,
    ProjectsPageComponent,
    StatsCardComponent,
    HeaderStaticsComponent,
    GraphComponent,
    TeamCardComponent,
    TasksPageComponent,
    SprintsSelectorComponent,
    SprintEditorComponent
  ],
})
export class DashboardModule {
}
