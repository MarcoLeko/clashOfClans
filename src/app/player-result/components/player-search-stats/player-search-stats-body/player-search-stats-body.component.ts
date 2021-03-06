import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ClansByClantagType, PlayerByMemberListType, PlayerByPlayerTagType} from '../../../../../generated/types';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {isUndefined} from 'util';

@Component({
  selector: 'app-player-search-stats-body',
  templateUrl: './player-search-stats-body.component.html',
  styleUrls: ['./player-search-stats-body.component.css']
})
export class PlayerSearchStatsBodyComponent implements OnInit, OnChanges {

  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyNightRef = this.storage.ref('images/trophy_night.png');
  public trophyLegendRef = this.storage.ref('images/trophy_legend.png');
  public trophyHomeImg: Observable<string | null>;
  public trophyNightImg: Observable<string | null>;
  public trophyLegendImg: Observable<string | null>;

  public playerBefore: PlayerByMemberListType;
  public playerNext: PlayerByMemberListType;

  constructor(private router: Router, private storage: AngularFireStorage) {
  }

  public ngOnInit() {
    this.getTrophiesUrl();
  }

  public ngOnChanges() {
    if (this.clanInfo) {
      const playerIndexCurrent = this.clanInfo.memberList.map(member => {
        return member.name;
      }).indexOf(this.playerResult.name);
      if (playerIndexCurrent > 0) {
        this.playerBefore = this.clanInfo.memberList[playerIndexCurrent - 1];
      }
      if (playerIndexCurrent < this.clanInfo.memberList.length - 1) {
        this.playerNext = this.clanInfo.memberList[playerIndexCurrent + 1];
      }
    }
  }

  public hasLegendLeagueExperienced(): boolean {
    return this.playerResult.legendStatistics && !isUndefined(this.playerResult.legendStatistics.legendTrophies);
  }

  public hasVersusTrophies(): boolean {
    return this.playerResult.versusTrophies !== 0;
  }

  public hasTrophies(): boolean {
    return this.playerResult.trophies !== 0;
  }

  public routeToPlayerBefore() {
    if (this.playerBefore) {
      this.router.navigate(['playerSearch/' + this.playerBefore.tag]);
    }
  }

  public routeToPlayerNext() {
    if (this.playerNext) {
      this.router.navigate(['playerSearch/' + this.playerNext.tag]);
    }
  }

  private getTrophiesUrl(): void {
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
    this.trophyNightRef.getDownloadURL().subscribe(url => this.trophyNightImg = url);
    this.trophyLegendRef.getDownloadURL().subscribe(url => this.trophyLegendImg = url);
  }
}
