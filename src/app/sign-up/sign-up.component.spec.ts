import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign-up', () => {
    let fName: object = {
        value: 'Name'
      },
      lName: object = {
        value: 'Surname'
      },
      uName: object = {
        value: 'username'
      },
      Email: object = {
        value: 'email@email.com'
      },
      Phone: object = {
        value: '0951753648'
      },
      Password: object = {
        value: '123456'
      },
      rPassword: object = {
        value: '123456'
      }
    component.signUp(fName, lName, uName, Email, Phone, Password, rPassword);
    expect(component).toBeDefined();
  });
});
