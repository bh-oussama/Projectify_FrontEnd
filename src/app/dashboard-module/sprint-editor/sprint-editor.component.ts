import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SprintService} from '../../sprint.service';

@Component({
  selector: 'app-sprint-editor',
  templateUrl: './sprint-editor.component.html',
  styleUrls: ['./sprint-editor.component.css']
})
export class SprintEditorComponent implements OnInit {
  sprintForm: FormGroup;
  @Output() hide = new EventEmitter();

  constructor(
    private sprintService: SprintService
  ) {
  }

  ngOnInit() {
    this.sprintForm = new FormGroup({
      name: new FormControl('', []),
      startDate: new FormControl('', []),
      endDate: new FormControl('', []),
    });
  }

  createSprint() {
    if (this.sprintForm.invalid) {
      console.log('invalid input');
      return;
    }
    console.log('okay');
    this.sprintService.addSprint(this.sprintForm);
  }
}
