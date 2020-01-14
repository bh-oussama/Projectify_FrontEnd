import { element } from "protractor";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Message } from "../../../models/message";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-messages-list",
  templateUrl: "./messages-list.component.html",
  styleUrls: ["./messages-list.component.css"]
})
export class MessagesListComponent implements OnInit {
  messageToSend: string;
  messages: Message[];
  dividedMessages: { date: string; messages: Message[] }[] = [];
  id: string = "1";
  dates: string[];
  constructor() {}
  divideMessages() {
    var temp: { date: string; messages: Message[] }[] = [];
    this.messages.map((m, i) => {
      this.dates[i] = m.date;
    });
    this.dates = [...new Set(this.dates)];
    this.dates.forEach((d, i) => {
      var filtred = this.messages.filter((m, i) => {
        return m.date == d;
      });

      temp.push({ date: d, messages: filtred });
    });
    this.dividedMessages = temp;
    setTimeout(this.scrollToBottom, 100);
  }

  ngOnInit() {
    this.dividedMessages;
    this.dates = [];
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
      new Message("hi man how are you doing?", "13/8/19", "1"),
      new Message("hi man how are you doing?", "13/8/19", "1"),
      new Message("hi man how are you doing?", "13/8/19", "1"),
      new Message("hi man how are you doing?", "13/8/19", "1"),
      new Message("hi man how are you doing?", "14/8/19", "2")
    ];

    this.divideMessages();
    console.log(this.dividedMessages);
  }
  scrollToBottom() {
    var element = document.getElementById("messagescontainer");
    element.scrollTop = element.scrollHeight;
  }
  ngOnChanges() {
    this.scrollToBottom();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }
  sendMessage() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yy = today.getFullYear() % 100;
    var msg = new Message(
      this.messageToSend,
      dd + "/" + mm + "/" + yy,
      this.id
    );
    this.messages.push(msg);
    this.divideMessages();
    this.messageToSend = "";
    console.log("aa");
  }
}
