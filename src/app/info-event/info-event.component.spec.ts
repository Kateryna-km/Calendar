import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { InfoEventComponent } from './info-event.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('InfoEventComponent', () => {
  let component: InfoEventComponent;
  let fixture: ComponentFixture<InfoEventComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEventComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return event', () => {
    let result = component.getEvent();
    expect(result).toBeUndefined();
  });

  it('should delete event', () => {
    component.deleteEvent();
    expect(component).toBeDefined();
  });

  it('should edit event', () => {
    component.editEvent();
    expect(component).toBeDefined();
  });

  it('should add user', () => {
    component.addUser();
    expect(component).toBeDefined();
  });
});
