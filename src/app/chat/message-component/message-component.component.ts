import { Message } from "./../../../models/message";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-message-component",
  templateUrl: "./message-component.component.html",
  styleUrls: ["./message-component.component.css"]
})
export class MessageComponentComponent implements OnInit {
  @Input() message: Message;
  isReceiver: Boolean;
  id: string = "1";
  constructor() {}

  ngOnInit() {
    this.isReceiver = this.id === this.message.id_sender;
  }
}
