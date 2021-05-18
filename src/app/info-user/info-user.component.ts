import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {templateJitUrl} from '@angular/compiler';
import {Router} from '@angular/router';

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
  events: string[];
  headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.access_token });
  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getUser(this.id);
    this.getEvent();
  }

  getUser(id_user: string): void {
    this.http.get<any>(this.baseURL + 'user/' + id_user, { headers: this.headers })
      .subscribe(response => {
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

  createEvent(): void {
    this.router.navigate(['/event']);
  }

  getEvent(): void {
    this.http.get<any>(this.baseURL + 'event/list', { headers: this.headers })
      .subscribe(response => {
        this.events = response;
      })
  }

  infoEvent(id): void {
    localStorage.setItem('id_event', id);
    this.router.navigate(['/event/' + id]);
  }

}
