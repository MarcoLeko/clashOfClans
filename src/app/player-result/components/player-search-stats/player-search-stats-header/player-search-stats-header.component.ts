import {Component, Input, OnChanges} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TownhallPictureService} from '../../../../shared/services/townhall-picture/townhall-picture.service';
import {HeroMapperService} from '../../../services/hero-mapper/hero-mapper.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {HeroDisplay} from '../../../services/hero-mapper/hero-display';
import {isUndefined} from 'util';

@Component({
  selector: 'app-player-search-stats-header',
  templateUrl: './player-search-stats-header.component.html',
  styleUrls: ['./player-search-stats-header.component.css']
})
export class PlayerSearchStatsHeaderComponent implements OnChanges {

  @Input() playerResult: PlayerByPlayerTagType;
  public imgSrcForTownhall: string;
  public heroes: HeroDisplay[];

  public noHeroesUrl: Observable<string | null>;
  public noLeagueUrl: Observable<string | null>;
  public noHeroesRef = this.storage.ref('images/clashplayer.png');
  public noLeagueRef = this.storage.ref('images/no_league.png');

  constructor(private townhallPictureService: TownhallPictureService,
              private heroMapperService: HeroMapperService,
              private storage: AngularFireStorage) {
  }

  ngOnChanges(): void {
    if(!this.hasHeroesInArray()) {
      this.getNoHeroImgHeader();
    }
    if (isUndefined(this.playerResult.league)) {
      this.getNoLeagueImgUrl();
    }
    this.townhallPictureService.getTownHallPicture(this.playerResult.townHallLevel).subscribe(url => this.imgSrcForTownhall = url);
    this.heroMapperService.mapHeroList(this.playerResult.heroes).subscribe(heroes => this.heroes = heroes);
  }

  private hasHeroesInArray() {
    return typeof this.playerResult.heroes !== undefined && this.playerResult.heroes.length > 0;
  }

  private getNoHeroImgHeader() {
    this.noHeroesRef.getDownloadURL().subscribe(url => this.noHeroesUrl = url);
  }

  private getNoLeagueImgUrl() {
    this.noLeagueRef.getDownloadURL().subscribe(url => this.noLeagueUrl = url);
  }
}
