import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { UserToEventComponent } from './user-to-event.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

describe('UserToEventComponent', () => {
  let component: UserToEventComponent;
  let fixture: ComponentFixture<UserToEventComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserToEventComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be undefined', () => {
    component.getEvent();
    expect(component).toBeDefined();
  });

  it('should be undefined', () => {
    let user: object = {
      value: '3'
    }

    component.addUser(user);
    expect(component).toBeDefined();
  });
});
