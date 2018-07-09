import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

class Report {
  name: string;
  time: number;
  text: string;
}


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public editorContent = '';
  public editorsName = '';
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    height: 200
  };
  router: Router;
  httpClient: HttpClient;
  report = new Report();
  tmpData;
  errMsg = '';
  noName = '';


  constructor(_router: Router, _httpClient: HttpClient) {
    this.router = _router;
    this.httpClient = _httpClient;
  }

  ngOnInit() {
    this.tmpData = new Date();
  }

  saveAndPost() {
    const ct = new Date().getTime();

    this.noName = '';
    if (this.editorsName === '') {
      this.noName = '* Please type your name';
      return;
    }

    this.report.name = this.editorsName;
    this.report.time = ct;
    this.report.text = this.editorContent;

    this.httpClient.post('http://127.0.0.1:8000/report', this.report).subscribe(
      answer => {
        this.router.navigateByUrl('/list');
      },
      err => {
        this.errMsg = 'Connection error';
      }
    );
  }

  notSave() {
    this.router.navigateByUrl('/list');
  }
}
