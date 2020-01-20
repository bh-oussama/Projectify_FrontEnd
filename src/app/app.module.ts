import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TasksPageComponent } from "./dashboard-module/task/tasks-page/tasks-page.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./registration/registration-form/registration-form.component";
import { ChatPageComponent } from "./dashboard-module/chat/chat-page/chat-page.component";
import { ContactListComponent } from "./dashboard-module/chat/contact-list/contact-list.component";
import { GroupCardComponent } from "./dashboard-module/chat/group-card/group-card.component";
import { DirectChatCardComponent } from "./dashboard-module/chat/direct-chat-card/direct-chat-card.component";
import { MessagesListComponent } from "./dashboard-module/chat/messages-list/messages-list.component";
import { MessageComponentComponent } from "./dashboard-module/chat/message-component/message-component.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { ProjectsPageComponent } from "./dashboard-module/projects/projects-page/projects-page.component";
import { StatsCardComponent } from "./dashboard-module/projects/projects-page/stats-card/stats-card.component";
import { HeaderStaticsComponent } from "./dashboard-module/projects/projects-page/header-statics/header-statics.component";
import { Ng2OdometerModule } from "ng2-odometer";
import { GraphComponent } from "./dashboard-module/projects/projects-page/graph/graph.component";
import { ChartsModule } from "ng2-charts";
import { TeamCardComponent } from "./dashboard-module/projects/projects-page/team-card/team-card.component";
// import {LoginFormComponent} from './registration/registration-form/registration-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home-component/home.component";
import { LoginComponentComponent } from "./login-component/login-component.component";
import { ProjectsComponent } from "./projects-component/projects.component";
import { BasicProjectTicketComponentComponent } from "./basic-project-ticket-component/basic-project-ticket-component.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material";
import {
  IgxButtonModule,
  IgxDragDropModule,
  IgxGridModule
} from "igniteui-angular";
import { NgxPopper } from "angular-popper";
import { ProjectEditorComponent } from "./project-editor/project-editor.component";
import { UserService } from "./Services/user.service";
import { AuthenticationService } from "./Services/authentication.service";
import { AuthInterceptor } from "./authentication/auth.interceptor";
import { DashboardModule } from "./dashboard-module/dashboard.module";
import { SprintsSelectorComponent } from "./dashboard-module/task/sprints-selector/sprints-selector.component";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
    declarations: [
        AppComponent,
        RegistrationFormComponent,
        HomeComponent,
        LoginComponentComponent,
        ProjectsComponent,
        BasicProjectTicketComponentComponent,
        ResetPasswordComponent,
        ProjectEditorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        IgxGridModule,
        IgxDragDropModule,
        IgxButtonModule,
        NgxPopper,
    DashboardModule,
    NgxLoadingModule.forRoot({})
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
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
