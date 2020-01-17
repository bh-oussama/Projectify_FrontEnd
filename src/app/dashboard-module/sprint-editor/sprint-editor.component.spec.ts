import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintEditorComponent } from './sprint-editor.component';

describe('SprintEditorComponent', () => {
  let component: SprintEditorComponent;
  let fixture: ComponentFixture<SprintEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
