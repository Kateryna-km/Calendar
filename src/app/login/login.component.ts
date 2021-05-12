import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// localStorage.setItem('id', null);
// localStorage.setItem('access_token', null);
// localStorage.setItem('refresh_token', null);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(uName, Password): boolean {
    this.username = uName.value;
    this.password = Password.value;
    uName.value = '';
    Password.value = '';
    this.http.post(this.baseURL + 'user/login', null, {
      params: {
        username: this.username,
        password: this.password
      },
      observe: 'response'
    })
      .subscribe((response) => {
        console.log(response);
        localStorage.setItem('id', response.body['id_user']);
        localStorage.setItem('access_token', response.body['access_token']);
        localStorage.setItem('refresh_token', response.body['refresh_token']);
        console.log(localStorage.getItem('id'));
        console.log(localStorage.getItem('access_token'));
        console.log(localStorage.getItem('refresh_token'));
        this.router.navigate(['/user/' + localStorage.getItem('id')]);
        // this.router.navigate['http://127.0.0.1:8000/user']
        // }, (err) => { console.log(err) }
      });
    return false;
  }

}
