import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id = localStorage.getItem('id');
  access_token = localStorage.getItem('access_token');
  refresh_token = localStorage.getItem('refresh_token');
  id_event = localStorage.getItem('id_event');
  event: string;
  name: string;
  date: string;
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
        this.event = response;
      })
  }

  editEvent(Name, Date): boolean {
    this.name = Name.value;
    this.date = this.reformatDate(Date.value);
    Name.value = '';
    Date.value = '';
    const header = new HttpHeaders({ 'Authorization': 'Bearer ' + this.refresh_token });
    this.http.put(this.baseURL + 'event/' + this.id_event, null, { headers: header,
      params: {
        name: this.name,
        date: this.date
      },
      observe: 'response'
    })
      .subscribe((response) => {
        this.router.navigate(['/event/' + this.id_event]);
      });
    return false;
  }

  reformatDate(dateStr)
  {
    let dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2]+ "." +dArr[1]+ "." +dArr[0]; //ex out: "18.01.10"
  }

}
