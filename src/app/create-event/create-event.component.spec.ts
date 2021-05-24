import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { CreateEventComponent } from './create-event.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it(' should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    let id = component.id;
    let access_token = component.access_token;
    let refresh_token = component.refresh_token;
    expect(id).toBeDefined();
    expect(access_token).toBeDefined();
    expect(refresh_token).toBeDefined()
  });

  it('should create user', () => {
    let name: object = {
        value: 'Name'
      },
      date: object = {
        value: '2021-04-11'
      }
    component.createEvent(name, date);
    expect(component).toBeDefined();
  });
});
