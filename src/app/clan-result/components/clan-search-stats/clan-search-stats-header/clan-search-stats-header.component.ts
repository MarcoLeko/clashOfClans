import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType} from '../../../../../generated/types';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-clan-search-stats-header',
  templateUrl: './clan-search-stats-header.component.html',
  styleUrls: ['./clan-search-stats-header.component.css']
})
export class ClanSearchStatsHeaderComponent implements OnInit {

  @Input()clanResult: ClansByClantagType;

  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyNightRef = this.storage.ref('images/trophy_night.png');
  public trophyHomeImg: Observable<string | null>;
  public trophyNightImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
    this.trophyNightRef.getDownloadURL().subscribe(url => this.trophyNightImg = url);
  }

}
