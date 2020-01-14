import { Component, OnInit } from "@angular/core";
import { Message } from "../../../models/message";

@Component({
  selector: "app-messages-list",
  templateUrl: "./messages-list.component.html",
  styleUrls: ["./messages-list.component.css"]
})
export class MessagesListComponent implements OnInit {
  messages: Message[];
  id: string = "1";
  constructor() {}

  ngOnInit() {
    this.messages = [
      new Message("hi man how are you doing?", "12/8/19", "2"),
      new Message("fine , thnx", "12/8/19", "1"),
      new Message("what about you ", "12/8/19", "1"),
      new Message(
        "Actually I am doing great I have just got promoted and that made me so happy?",
        "12/8/19",
        "2"
      ),
      new Message("hi man how are you doing?", "12/8/19", "2"),
      new Message("hi man how are you doing?", "12/8/19", "1"),
      new Message("hi man how are you doing?", "12/8/19", "2"),
      new Message("hi man how are you doing?", "12/8/19", "1"),
      new Message("hi man how are you doing?", "12/8/19", "1"),
      new Message("hi man how are you doing?", "12/8/19", "1"),
      new Message("hi man how are you doing?", "12/8/19", "1"),
      new Message("hi man how are you doing?", "12/8/19", "2")
    ];
  }
}
