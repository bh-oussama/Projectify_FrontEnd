import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  bShowProjectCreationPopup = false;

  constructor() {
  }

  ngOnInit() {
  }

  displayProjectCreationPopup(state = true) {
    this.bShowProjectCreationPopup = state;
  }
}
