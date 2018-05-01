import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-clan-search',
  templateUrl: './clan-search.component.html',
  styleUrls: ['./clan-search.component.css']
})
export class ClanSearchComponent implements OnInit {

  public clanCastleUrl: Observable<string | null>;
  public ref = this.storage.ref('images/clan_castle.png');

  constructor(private router: Router, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => this.clanCastleUrl = url);
  }

  onSubmit(value) {
    this.router.navigate(['search/' + value.playerId]);
  }
}
