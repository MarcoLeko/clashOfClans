import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';
import {AngularFireStorage} from 'angularfire2/storage';
import {isUndefined} from 'util';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-current-season-modal',
  templateUrl: './current-season-modal.component.html',
  styleUrls: ['./current-season-modal.component.css']
})
export class CurrentSeasonModalComponent implements OnChanges {

  @Input() playerResult: PlayerByPlayerTagType;
  @ViewChild('childModal') modal: ModalDirective;

  public donations: any[];
  public maxProgressBarValue: number;
  public noLeagueRef = this.storage.ref('images/no_league.png');
  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyNightRef = this.storage.ref('images/trophy_night.png');
  public trophyLegendRef = this.storage.ref('images/trophy_legend.png');
  public noLeagueImg: Observable<string | null>;
  public trophyHomeImg: Observable<string | null>;
  public trophyNightImg: Observable<string | null>;
  public trophyLegendImg: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {}

  open(): void {
    this.modal.show();
  }

  ngOnChanges(): void {
    if (isUndefined(this.playerResult.league)) {
      this.noLeagueRef.getDownloadURL().subscribe(url => {
        this.noLeagueImg = url;
      })
    }
    this.getTrophiesUrl();
    this.donationsComparison(this.playerResult);
  }

  donationsComparison(player: PlayerByPlayerTagType): void {
    this.donations = [];
    let types = ['success', 'danger'];

    if (this.hasNoDonationsStats(player)) {
      this.defaultDonationsValues(types, player);
    } else {
      this.currentDonationsValues(player, types);
    }
  }

  private currentDonationsValues(player: PlayerByPlayerTagType, types: string[]): void {
    this.donations.push({value: player.donations, type: types[0], label: player.donations});
    this.donations.push({value: player.donationsReceived, type: types[1], label: player.donationsReceived});
    this.maxProgressBarValue = player.donationsReceived + player.donations;
  }

  private defaultDonationsValues(types: string[], player: PlayerByPlayerTagType): void {
    this.donations.push({value: 1, type: types[0], label: player.donations});
    this.donations.push({value: 1, type: types[1], label: player.donationsReceived});
    this.maxProgressBarValue = 2;
  }

  private hasNoDonationsStats(player: PlayerByPlayerTagType): boolean {
    return player.donations === 0 && player.donationsReceived === 0;
  }

  hasLegendLeagueExperienced(): boolean {
    if (this.playerResult.legendStatistics) {
      if (this.playerResult.legendStatistics.legendTrophies > 0) {
        return true;
      }
    }
    return false;
  }

  hasVersusTrophies(): boolean {
    return this.playerResult.versusTrophies != 0;
  }

  hasTrophies(): boolean {
    return this.playerResult.trophies != 0;
  }

  private getTrophiesUrl(): void {
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
    this.trophyNightRef.getDownloadURL().subscribe(url => this.trophyNightImg = url);
    this.trophyLegendRef.getDownloadURL().subscribe(url => this.trophyLegendImg = url);
  }
}
