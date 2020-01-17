import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {ProjectService} from '../project.service';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})

export class ProjectEditorComponent implements OnInit {
  projectForm: any;
  currentDate: string;

  @Output() close = new EventEmitter();

  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      projectDescription: new FormControl('')
    });
    const d = new Date();
    this.currentDate = formatDate(d, 'dd/MM/yyyy', 'en-US');
  }

  createProject() {

    if (this.projectForm.invalid) {
      console.log('invalid input.');
      return;
    }

    this.close.emit(false);

    this.projectService.addProject(this.projectForm, localStorage.getItem('userID')).subscribe(
      (data) => {
        console.log('okay');
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('done');
      }
    );
  }
}
