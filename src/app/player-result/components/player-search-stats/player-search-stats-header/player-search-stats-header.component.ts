import {Component, Input, OnInit} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TownhallPictureService} from '../../../../shared/services/townhall-picture/townhall-picture.service';
import {HeroDisplay} from '../../../services/hero-mapper/hero-display';
import {HeroMapperService} from '../../../services/hero-mapper/hero-mapper.service';

@Component({
  selector: 'app-player-search-stats-header',
  templateUrl: './player-search-stats-header.component.html',
  styleUrls: ['./player-search-stats-header.component.css']
})
export class PlayerSearchStatsHeaderComponent implements OnInit {

  @Input() playerResult: PlayerByPlayerTagType;
  public imgSrcForTownhall: string;
  public heroes: HeroDisplay[];
  constructor(private townhallPictureService: TownhallPictureService,
              private heroMapperService: HeroMapperService) {
  }

  ngOnInit(): void {
    this.imgSrcForTownhall = this.townhallPictureService.getTownHallPicture(this.playerResult.townHallLevel);
    this.heroes = this.heroMapperService.mapHeroList(this.playerResult.heroes);
    console.log(this.heroes);
  }
}
