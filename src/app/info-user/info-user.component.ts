import { Injectable } from '@angular/core';
import {observable, Observable, throwError} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {templateJitUrl} from '@angular/compiler';
import {Router} from '@angular/router';

// const id = localStorage.getItem('id');
// const access_token = localStorage.getItem('access_token');
// const refresh_token = localStorage.getItem('refresh_token');

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})

export class InfoUserComponent implements OnInit {

  id = localStorage.getItem('id');
  access_token = localStorage.getItem('access_token');
  refresh_token = localStorage.getItem('refresh_token');
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.id, this.access_token, this.refresh_token)
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.access_token });
    this.getUser(this.id, headers);
  }

  getUser(id_user: string, headers: HttpHeaders): void {
    this.http.get<any>(this.baseURL + 'user/' + id_user, { headers })
      .subscribe(response => {
        // console.log(response);
        this.firstName = response['firstName'];
        this.lastName = response['lastName'];
        this.username = response['username'];
        this.email = response['email'];
        this.phone = response['phone'];
      })
  }

  logout(): void {
    localStorage.setItem('id', null);
    localStorage.setItem('access_token', null);
    localStorage.setItem('refresh_token', null);
    this.router.navigate(['/']);
  }

  edit(): void {
    this.router.navigate(['/user/' + localStorage.getItem('id') + '/edit']);
  }

}
