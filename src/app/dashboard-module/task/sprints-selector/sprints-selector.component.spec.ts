import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintsSelectorComponent } from './sprints-selector.component';

describe('SprintsSelectorComponent', () => {
  let component: SprintsSelectorComponent;
  let fixture: ComponentFixture<SprintsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
