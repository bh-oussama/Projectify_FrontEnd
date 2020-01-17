import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProjectTicketComponentComponent } from './basic-project-ticket-component.component';

describe('BasicProjectTicketComponentComponent', () => {
  let component: BasicProjectTicketComponentComponent;
  let fixture: ComponentFixture<BasicProjectTicketComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProjectTicketComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProjectTicketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
