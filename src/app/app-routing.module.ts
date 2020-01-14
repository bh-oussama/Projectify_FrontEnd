import { MessagesListComponent } from "./chat/messages-list/messages-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatPageComponent } from "./chat/chat-page/chat-page.component";

const routes: Routes = [
  { path: "", component: MessagesListComponent },
  { path: "chat/:id", component: MessagesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
