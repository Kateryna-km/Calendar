import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  id = localStorage.getItem('id');
  access_token = localStorage.getItem('access_token');
  refresh_token = localStorage.getItem('refresh_token');
  name: string;
  date: string;
  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  createEvent(Name, Date): boolean {
    this.name = Name.value;
    this.date = this.reformatDate(Date.value);
    Name.value = '';
    Date.value = '';
    const header = new HttpHeaders({ 'Authorization': 'Bearer ' + this.refresh_token });
    this.http.post(this.baseURL + 'event', null, { headers: header,
      params: {
        name: this.name,
        date: this.date
      },
      observe: 'response'
    })
      .subscribe((response) => {
        this.router.navigate(['/user/' + localStorage.getItem('id')]);
      });
    return false;
  }

  reformatDate(dateStr)
  {
    console.log(dateStr)
    console.log(typeof dateStr)
    let dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2]+ "." +dArr[1]+ "." +dArr[0]; //ex out: "18.01.10"
  }

}
