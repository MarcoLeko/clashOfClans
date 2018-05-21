import {Component, Input} from '@angular/core';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../generated/types';

@Component({
  selector: 'app-player-search-stats',
  templateUrl: './player-search-stats.component.html'
})
export class PlayerSearchStatsComponent {

  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;
}
