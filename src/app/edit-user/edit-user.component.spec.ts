import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edit-user.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit user', () => {
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
    component.editUser(fName, lName, uName, Email, Phone, Password, rPassword);
    expect(component).toBeDefined();
  });
});
