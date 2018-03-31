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
    console.log(this.playerResult);
    this.modal.show();
  }

  ngOnChanges() {
    this.donationsComparison(this.playerResult);
    this.maxProgressBarValue = this.playerResult.donationsReceived + this.playerResult.donations;
  }

  donationsComparison(player: PlayerByPlayerTagType): void {
    this.donations = [];
    let types = ['success', 'danger'];
    this.donations.push({value: player.donations, type: types[0], label: player.donations});
    this.donations.push({value: player.donationsReceived, type: types[1], label: player.donationsReceived});
  }

  hasLegendLeagueExperienced() {
    if (this.playerResult.legendStatistics) {
      if (this.playerResult.legendStatistics.legendTrophies > 0) {
        return true;
      }
    }
    return false;
  }
}
