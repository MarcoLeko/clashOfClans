import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  token =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDA' +
  'tYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJz' +
  'dXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMyODFkMTA0LWQ4OWYtNGI3NS04NzcxLWY2Z' +
  'TdmMDI4ZTVkNSIsImlhdCI6MTUxODk2NTIzOSwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4Nz' +
  'U2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJs' +
  'aW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbm' +
  'cifSx7ImNpZHJzIjpbIjkxLjE1LjExOC4yMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.oocnYu' +
  '-vqMnIkBs6U9JqP7VHYbEnz1hrSO-G6K6QX-IFUGtC82ePPrtr9N3ZngAt7pnXQSAfoQdh3' +
  'XB0P0TWZA';

  public data;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    // this.http.get('v1/clans/%238Q80V2JG', httpOptions).subscribe(result => this.data = result);
  }
}
