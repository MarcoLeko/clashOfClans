import { Component, Input, OnInit } from '@angular/core';
import { PlayerByPlayerTagType } from '../../../../../generated/types';
import { TownhallPictureService } from '../../../../shared/services/get-townhall-picture/townhall-picture.service';

@Component({
  selector: 'app-player-search-stats-header',
  templateUrl: './player-search-stats-header.component.html',
  styleUrls: ['./player-search-stats-header.component.css']
})
export class PlayerSearchStatsHeaderComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  public imgSrcForLeagueBadge: string;
  public imgSrcForClanBadge: string;
  public imgSrcForTownhall: string;

  constructor(private townhallPictureService: TownhallPictureService) {
  }

  ngOnInit(): void {
    this.imgSrcForLeagueBadge = this.playerResult.league.iconUrls.medium;
    this.imgSrcForClanBadge = this.playerResult.clan.clan.badgeUrls.medium;
    this.imgSrcForTownhall = this.townhallPictureService.getTownHallPicture(this.playerResult.townHallLevel);
    console.log(this.playerResult);
  }
}