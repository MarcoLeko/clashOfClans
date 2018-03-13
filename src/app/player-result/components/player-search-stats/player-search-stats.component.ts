import { Component, Input, OnInit } from '@angular/core';
import { PlayerByPlayerTagType } from '../../../../generated/types';
import { Mocks } from '../../../testing/mocks';

@Component({
  selector: 'app-player-search-stats',
  templateUrl: './player-search-stats.component.html',
  styleUrls: ['./player-search-stats.component.css']
})
export class PlayerSearchStatsComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  public playerResultForChildComp: PlayerByPlayerTagType;

  ngOnInit(): void {
    this.playerResultForChildComp = Mocks.PLAYERSTATSBYPLAYERTAG;
  }
}
