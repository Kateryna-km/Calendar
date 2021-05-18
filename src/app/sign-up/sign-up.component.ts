import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.firstName = 'Katya';
  }

  signUp(fName, lName, uName, Email, Phone, Password, rPassword): boolean {
    this.firstName = fName.value;
    this.lastName = lName.value;
    this.username = uName.value;
    this.email = Email.value;
    this.phone = Phone.value;
    this.password = Password.value;
    this.repeatPassword = rPassword.value;
    this.http.post(this.baseURL + 'user', null, {
      params: {
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        password: this.password
      },
      observe: 'response'
    })
      .subscribe(response => {
        localStorage.setItem('id', response.body['id']);
        localStorage.setItem('access_token', response.body['access_token']);
        localStorage.setItem('refresh_token', response.body['refresh_token']);
        this.router.navigate(['/user/' + localStorage.getItem('id')]);
      });

    fName.value = '';
    lName.value = '';
    uName.value = '';
    Email.value = '';
    Phone.value = '';
    Password.value = '';
    rPassword.value = '';
    return false;
  }

}
