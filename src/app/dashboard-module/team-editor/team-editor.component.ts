import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-team-editor',
  templateUrl: './team-editor.component.html',
  styleUrls: ['./team-editor.component.css']
})
export class TeamEditorComponent implements OnInit {
  teamForm: FormGroup;
  @Output() close = new EventEmitter();

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
    this.teamForm = new FormGroup({
      TeamName: new FormControl('', []),
      TeamDescription: new FormControl('', [])
    });
  }

  createTeam() {
    console.log('creating team');
    this.projectService.addTeam(this.teamForm, '1' /*localStorage.getItem('projectID')*/)
      .subscribe(
        (data) => {
          console.log('creating team: okay');
          this.close.emit(false);
        },
        (error) => {
          console.log('creating team: error: ' + error);
        },
        () => {
          console.log('creating team: done');
        }
      );
  }
}
