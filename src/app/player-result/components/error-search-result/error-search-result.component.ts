import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-error-search-result',
  templateUrl: './error-search-result.component.html',
  styleUrls: ['./error-search-result.component.css']
})
export class ErrorSearchResultComponent implements OnInit{

  public clashPlayerUrl: Observable<string | null>;
  public ref = this.storage.ref('images/clashplayer.png');

  constructor(private router: Router, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => {
      this.clashPlayerUrl = url;
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

}
