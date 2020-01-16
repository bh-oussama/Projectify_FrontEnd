import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationFormComponent } from "./registration/registration-form/registration-form.component";
import { FormsModule } from "@angular/forms";
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
import { OdometerModule } from "ng-odometer";
import { Ng2OdometerModule } from "ng2-odometer";
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
    HeaderStaticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OdometerModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
