import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImIwYzU0Yzg4LTQ5ZWQtNDMyNC05OGQ2LWZhYTM2ODAxMWU0NyIsImlhdCI6MTUxODk1OTI5MCwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkxLjE1LjExOC4yMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Lp1Brz12PvGzJLFHlogOGQ85RB8BbbtyjgXCtOmsaY2uzSvJIupVVwJRenVoVo0ZFs30FuTyrA1TTNG-UYcfmQ';
  data;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    this.http.get('/v1/clans/%238Q80V2JG', httpOptions).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(event) {
    console.log(event);
  }
}
