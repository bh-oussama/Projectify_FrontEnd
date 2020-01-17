import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectChatCardComponent } from './direct-chat-card.component';

describe('DirectChatCardComponent', () => {
  let component: DirectChatCardComponent;
  let fixture: ComponentFixture<DirectChatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectChatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectChatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
