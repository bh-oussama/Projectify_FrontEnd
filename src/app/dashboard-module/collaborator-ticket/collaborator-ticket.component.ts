import {Component, Input, OnInit} from '@angular/core';
import {CollaboratorModel} from '../../models/Collaborator.model';

@Component({
  selector: 'app-collaborator-ticket',
  templateUrl: './collaborator-ticket.component.html',
  styleUrls: ['./collaborator-ticket.component.css']
})
export class CollaboratorTicketComponent implements OnInit {

  @Input('data') data;
  // data: CollaboratorModel;

  constructor() {
  }

  ngOnInit() {
    // this.data = new CollaboratorModel();
    // this.data.name = 'some random name';
  }
}
