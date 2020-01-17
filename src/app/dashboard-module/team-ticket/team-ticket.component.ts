import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-ticket',
  templateUrl: './team-ticket.component.html',
  styleUrls: ['./team-ticket.component.css']
})
export class TeamTicketComponent implements OnInit {
  name = 'Design';
  collaborators = [];
  constructor() {
  }

  ngOnInit() {
  }

}
