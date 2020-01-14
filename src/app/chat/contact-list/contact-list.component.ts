import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  @Input() groupContacts: {
    groupName: string;
    color: string;
    lastMessage: string;
  }[];
  @Input() contacts: {
    name: string;
    pic: string;
    lastMessage: string;
    id: string;
  }[];

  constructor() {}

  ngOnInit() {
    this.groupContacts = [
      {
        groupName: "design",
        color: "yellow",
        lastMessage: "hi guys I have a problem"
      },
      {
        groupName: "design",
        color: "yellow",
        lastMessage: "hi guys I have a problem"
      },
      {
        groupName: "dev",
        color: "green",
        lastMessage: "hi guys I have a problem"
      },
      { groupName: "marketing", color: "red", lastMessage: "20 k in sales :D " }
    ];
    this.contacts = [
      {
        name: "Oussama Belhadj",
        pic: "https://bit.ly/357PoVo",
        lastMessage: "Gotta work on this",
        id: "2"
      },
      {
        name: "Mohamed Belja",
        pic: "https://bit.ly/2MFu7Mn",
        lastMessage: "wa",
        id: "3"
      },
      {
        name: "Aymen Alatri",
        pic: "https://bit.ly/2Q9YVam",
        lastMessage: "my name is ras ",
        id: "4"
      }
    ];
  }
}
