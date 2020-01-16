import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-direct-chat-card",
  templateUrl: "./direct-chat-card.component.html",
  styleUrls: ["./direct-chat-card.component.css"]
})
export class DirectChatCardComponent implements OnInit {
  @Input() contact: {
    name: string;
    pic: string;
    lastMessage: string;
    id: string;
  };

  constructor(private router: Router) {}
  navigate() {
    console.log("yo");
    this.router.navigate(["chat/", this.contact.id]);
  }
  ngOnInit() {}
}
