import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TasksPageComponent } from "./task/tasks-page/tasks-page.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./registration/registration-form/registration-form.component";
import { ChatPageComponent } from "./chat/chat-page/chat-page.component";
import { ContactListComponent } from "./chat/contact-list/contact-list.component";
import { GroupCardComponent } from "./chat/group-card/group-card.component";
import { DirectChatCardComponent } from "./chat/direct-chat-card/direct-chat-card.component";
import { MessagesListComponent } from "./chat/messages-list/messages-list.component";
import { MessageComponentComponent } from "./chat/message-component/message-component.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { ProjectsPageComponent } from "./projects/projects-page/projects-page.component";
import { StatsCardComponent } from "./projects/projects-page/stats-card/stats-card.component";
import { HeaderStaticsComponent } from "./projects/projects-page/header-statics/header-statics.component";
import { Ng2OdometerModule } from "ng2-odometer";
import { GraphComponent } from "./projects/projects-page/graph/graph.component";
import { ChartsModule } from "ng2-charts";
import { TeamCardComponent } from "./projects/projects-page/team-card/team-card.component";
import {LoginFormComponent} from './registration/registration-form/registration-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home-component/home.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {ProjectsComponent} from './projects-component/projects.component';
import {BasicProjectTicketComponentComponent} from './basic-project-ticket-component/basic-project-ticket-component.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material';
import {IgxButtonModule, IgxDragDropModule, IgxGridModule} from 'igniteui-angular';
import {NgxPopper} from 'angular-popper';
import {ProjectEditorComponent} from './project-editor/project-editor.component';
import {UserService} from './Services/user.service';
import {AuthenticationService} from './Services/authentication.service';
import {AuthInterceptor} from './authentication/auth.interceptor';
import {DashboardModule} from './dashboard-module/dashboard.module';

import { SprintsSelectorComponent } from "./task/sprints-selector/sprints-selector.component";
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
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

    SprintsSelectorComponent
    LoginFormComponent,
    HomeComponent,
    LoginComponentComponent,
    ProjectsComponent,
    BasicProjectTicketComponentComponent,
    ResetPasswordComponent,
    ProjectEditorComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2OdometerModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    IgxGridModule,
    IgxDragDropModule,
    IgxButtonModule,
    NgxPopper,
    DashboardModule
  ],
  entryComponents: [SprintsSelectorComponent],
  providers: [
    UserService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
