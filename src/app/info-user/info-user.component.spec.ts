import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InfoUserComponent } from './info-user.component';

describe('InfoUserComponent', () => {
  let component: InfoUserComponent;
  let fixture: ComponentFixture<InfoUserComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    component.infoEvent(3);
    expect(component).toBeDefined();
  });

  it('should be defined', () => {
    component.getEvent();
    expect(component).toBeDefined();
  });

  it('should create event', () => {
    component.createEvent();
    expect(component).toBeDefined();
  });

  it('should edit this event', () => {
    component.edit();
    expect(component).toBeDefined();
  });

  it('should be loguot', () => {
    component.logout();
    expect(component).toBeDefined();
  });

  it('should return user', () => {
    component.getUser('3');
    expect(component).toBeDefined();
  });
});
