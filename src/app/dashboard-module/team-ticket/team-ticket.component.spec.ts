import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTicketComponent } from './team-ticket.component';

describe('TeamTicketComponent', () => {
  let component: TeamTicketComponent;
  let fixture: ComponentFixture<TeamTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
