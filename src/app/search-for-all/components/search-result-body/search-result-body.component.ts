import {Component, Input, OnInit} from '@angular/core';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-result-body',
  templateUrl: './search-result-body.component.html',
  styleUrls: ['./search-result-body.component.css']
})
export class SearchResultBodyComponent implements OnInit {

  @Input() searchResult: PlayerByPlayerTagType | ClansByClantagType;
  public isPlayer: boolean;

  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyHomeImg: Observable<string | null>;
  public trophyNightRef = this.storage.ref('images/trophy_night.png');
  public trophyNightImg: Observable<string | null>;
  public noLeagueRef = this.storage.ref('images/no_league.png');
  public noLeagueImg: Observable<string | null>;


  constructor(private rotuer: Router,
              private storage: AngularFireStorage) { }

  public ngOnInit(): void {
    this.isPlayer = this.isPlayerTagType(this.searchResult);
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
    this.trophyNightRef.getDownloadURL().subscribe(url => this.trophyNightImg = url);
    this.noLeagueRef.getDownloadURL().subscribe(url => this.noLeagueImg = url);
  }

  public goToDetailedStats(): void {
    let moduleUrl: string;
    if (this.isPlayer) {
      moduleUrl = 'playerSearch/';
    } else {
      moduleUrl = 'clanSearch/';
    }
    this.rotuer.navigate([moduleUrl, this.searchResult.tag]);
  }

  private isPlayerTagType(object: PlayerByPlayerTagType | ClansByClantagType): boolean {
    return 'warStars' in object;
  }
}
