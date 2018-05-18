import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {

  public clashPlayerUrl: Observable<string | null>;
  public ref = this.storage.ref('images/clashplayer.png');

  constructor(private router: Router, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => this.clashPlayerUrl = url);
  }

  onSubmit(value) {
    this.router.navigate(['playerSearch/' + value.playerId]);
  }
}
