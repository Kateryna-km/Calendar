import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToEventComponent } from './user-to-event.component';

describe('UserToEventComponent', () => {
  let component: UserToEventComponent;
  let fixture: ComponentFixture<UserToEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserToEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
