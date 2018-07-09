import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface Report {
  name: string;
  time: number;
  text: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  httpClient: HttpClient;
  reports: Report[]  = [];

  constructor(_httpClient: HttpClient) {
    this.httpClient = _httpClient;
  }

  ngOnInit() {
    console.log('LIST COMPONENT INIT');
    this.httpClient.get<Report[]>('http://127.0.0.1:8000/list').subscribe(
      reports => {this.reports = reports; }
    );
  }

  toDate(time) {
    return new Date(time);
  }

}
