import { Component, Input, OnInit } from '@angular/core';
import { PlayerByPlayerTagType } from '../../../../../generated/types';

@Component({
  selector: 'app-player-serch-stats-body',
  templateUrl: './player-serch-stats-body.component.html',
  styleUrls: ['./player-serch-stats-body.component.css']
})
export class PlayerSerchStatsBodyComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;

  ngOnInit() {
    console.log(this.playerResult)
  }

}
