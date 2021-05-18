import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id = localStorage.getItem('id');
  access_token = localStorage.getItem('access_token');
  refresh_token = localStorage.getItem('refresh_token');
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
  baseURL = 'http://127.0.0.1:8000/';
  access_headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.access_token });
  refresh_headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.refresh_token });

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getUser(this.id, this.access_headers);
  }

  getUser(id_user: string, headers: HttpHeaders): void {
    this.http.get<any>(this.baseURL + 'user/' + id_user, { headers })
      .subscribe(response => {
        this.firstName = response['firstName'];
        this.lastName = response['lastName'];
        this.username = response['username'];
        this.email = response['email'];
        this.phone = response['phone'];
      })
  }

  editUser(fName, lName, uName, Email, Phone, Password, rPassword): boolean {
    this.firstName = fName.value;
    this.lastName = lName.value;
    this.username = uName.value;
    this.email = Email.value;
    this.phone = Phone.value;
    this.password = Password.value;
    this.repeatPassword = rPassword.value;
    this.http.put(this.baseURL + 'user/update', null, {headers: this.refresh_headers,
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
        this.router.navigate(['/user/' + this.id]);
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

  delete(): void {
    this.http.delete(this.baseURL + 'user/delete', { headers: this.refresh_headers })
      .subscribe(response => {
        this.router.navigate(['/']);
      });
  }

}
