import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import {FormsModule} from '@angular/forms';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { ContactListComponent } from './chat/contact-list/contact-list.component';
import { GroupCardComponent } from './chat/group-card/group-card.component';
import { DirectChatCardComponent } from './chat/direct-chat-card/direct-chat-card.component';
import { MessagesListComponent } from './chat/messages-list/messages-list.component';
import { MessageComponentComponent } from './chat/message-component/message-component.component';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
