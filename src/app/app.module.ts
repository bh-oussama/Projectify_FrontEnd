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

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ChatPageComponent,
    ContactListComponent,
    GroupCardComponent,
    DirectChatCardComponent,
    MessagesListComponent,
    MessageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
