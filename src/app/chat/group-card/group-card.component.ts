import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
  @Input() groupContact: { groupName: string, color: string, lastMessage: string, };
  constructor() { }

  ngOnInit() {
    console.log(this.groupContact);
  }

}
