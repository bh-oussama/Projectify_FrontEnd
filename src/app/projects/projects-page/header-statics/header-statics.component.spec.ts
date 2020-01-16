import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStaticsComponent } from './header-statics.component';

describe('HeaderStaticsComponent', () => {
  let component: HeaderStaticsComponent;
  let fixture: ComponentFixture<HeaderStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
