import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-direct-chat-card',
  templateUrl: './direct-chat-card.component.html',
  styleUrls: ['./direct-chat-card.component.css']
})
export class DirectChatCardComponent implements OnInit {
  @Input() contact: { name: string, pic: string, lastMessage: string, };

  constructor() { }

  ngOnInit() {
  
  }

}
