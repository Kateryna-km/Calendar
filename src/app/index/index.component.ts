import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  baseURL = 'http://127.0.0.1:8000/';
  dateTime: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.dateTime = this.date_time()
  }

  login(): void {
    this.router.navigate(['/user/login']);
  }

  signUp(): void {
    this.router.navigate(['/user']);
  }

  zero_first_format(value)
  {
    if (value < 10) value='0'+value;
    return value;
  }

  date_time()
  {
    let current_datetime = new Date();
    let day = this.zero_first_format(current_datetime.getDate());
    let month = this.zero_first_format(current_datetime.getMonth()+1);
    let year = current_datetime.getFullYear();

    return day+"."+month+"."+year;
  }

}
