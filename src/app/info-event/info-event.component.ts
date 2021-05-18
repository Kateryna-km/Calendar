import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent implements OnInit {

  id = localStorage.getItem('id');
  access_token = localStorage.getItem('access_token');
  refresh_token = localStorage.getItem('refresh_token');
  id_event = localStorage.getItem('id_event');
  event: string[];
  access_headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.access_token });
  refresh_headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.refresh_token });
  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    this.http.get<any>(this.baseURL + 'event/' + this.id_event, { headers: this.access_headers })
      .subscribe(response => {
        this.event = [response];
      })
  }

  deleteEvent(): void {
    this.http.delete(this.baseURL + 'event/' + this.id_event, { headers: this.refresh_headers })
      .subscribe(response => {
        this.router.navigate(['/user/' + this.id]);
      });
  }

  editEvent(): void {
    this.router.navigate(['/event/' + this.id_event + '/edit']);
  }

  addUser(): void {
    this.router.navigate(['/event/' + this.id_event + '/add-user']);
  }

}
