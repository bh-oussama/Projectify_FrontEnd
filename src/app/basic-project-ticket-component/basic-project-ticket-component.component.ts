import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basic-project-ticket-component',
  templateUrl: './basic-project-ticket-component.component.html',
  styleUrls: ['./basic-project-ticket-component.component.css']
})
export class BasicProjectTicketComponentComponent implements OnInit {

  @Input('projectName') projectName;
  @Input('projectDescription') projectDescription;
  @Input('projectID') projectID;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  navigateToProject() {
    localStorage.setItem('projectID', this.projectID);
    this.router.navigate(['dashboard/' + this.projectID + '/projects']);
  }
}
