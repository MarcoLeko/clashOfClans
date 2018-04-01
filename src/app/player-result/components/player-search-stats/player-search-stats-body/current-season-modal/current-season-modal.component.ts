import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../../generated/types';
import {ModalDirective} from 'ngx-bootstrap';

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

  open(): void {
    this.modal.show();
  }

  ngOnChanges() {
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

  private currentDonationsValues(player: PlayerByPlayerTagType, types: string[]) {
    this.donations.push({value: player.donations, type: types[0], label: player.donations});
    this.donations.push({value: player.donationsReceived, type: types[1], label: player.donationsReceived});
    this.maxProgressBarValue = player.donationsReceived + player.donations;
  }

  private defaultDonationsValues(types: string[], player: PlayerByPlayerTagType) {
    this.donations.push({value: 1, type: types[0], label: player.donations});
    this.donations.push({value: 1, type: types[1], label: player.donationsReceived});
    this.maxProgressBarValue = 2;
  }

  private hasNoDonationsStats(player: PlayerByPlayerTagType) {
    return player.donations === 0 && player.donationsReceived === 0;
  }

  hasLegendLeagueExperienced() {
    if (this.playerResult.legendStatistics) {
      if (this.playerResult.legendStatistics.legendTrophies > 0) {
        return true;
      }
    }
    return false;
  }

  hasVersusTrophies() {
    return this.playerResult.versusTrophies != 0;
  }

  hasTrophies() {
    return this.playerResult.trophies != 0;
  }
}
