import { Component, Input } from '@angular/core';
import { PlayerByPlayerTagType } from '../../../../generated/types';

@Component({
  selector: 'app-player-search-stats',
  templateUrl: './player-search-stats.component.html',
  styleUrls: ['./player-search-stats.component.css']
})
export class PlayerSearchStatsComponent {

  @Input() playerResult: PlayerByPlayerTagType;
}
