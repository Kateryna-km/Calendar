import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-to-event',
  templateUrl: './user-to-event.component.html',
  styleUrls: ['./user-to-event.component.css']
})
export class UserToEventComponent implements OnInit {

  id = localStorage.getItem('id');
  access_token = localStorage.getItem('access_token');
  refresh_token = localStorage.getItem('refresh_token');
  id_event = localStorage.getItem('id_event');
  event: string[];
  user: string;
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

  addUser(id_user): boolean {
    this.user = id_user.value;
    id_user.value = '';
    this.http.post(this.baseURL + 'calendar/group', null, { headers: this.refresh_headers,
      params: {
        user_id: this.user,
        event_id: this.id_event
      },
      observe: 'response'
    })
      .subscribe((response) => {
        this.router.navigate(['/event/' + this.id_event]);
      });
    return false;
  }

}
