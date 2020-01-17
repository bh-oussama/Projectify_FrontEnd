import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorTicketComponent } from './collaborator-ticket.component';

describe('CollaboratorTicketComponent', () => {
  let component: CollaboratorTicketComponent;
  let fixture: ComponentFixture<CollaboratorTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
