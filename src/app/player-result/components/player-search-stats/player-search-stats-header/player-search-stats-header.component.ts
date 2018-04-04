import {Component, Input, OnChanges} from '@angular/core';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TownhallPictureService} from '../../../../shared/services/townhall-picture/townhall-picture.service';
import {HeroMapperService} from '../../../services/hero-mapper/hero-mapper.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {HeroDisplay} from '../../../services/hero-mapper/hero-display';

@Component({
  selector: 'app-player-search-stats-header',
  templateUrl: './player-search-stats-header.component.html',
  styleUrls: ['./player-search-stats-header.component.css']
})
export class PlayerSearchStatsHeaderComponent implements OnChanges {

  @Input() playerResult: PlayerByPlayerTagType;
  public imgSrcForTownhall: string;
  public heroes: HeroDisplay[];

  public clashPlayerUrl: Observable<string | null>;
  public ref = this.storage.ref('images/clashplayer.png');

  constructor(private townhallPictureService: TownhallPictureService,
              private heroMapperService: HeroMapperService,
              private storage: AngularFireStorage) {
  }

  ngOnChanges(): void {
    this.ref.getDownloadURL().subscribe(url => {
      this.clashPlayerUrl = url;
    });
    this.townhallPictureService.getTownHallPicture(this.playerResult.townHallLevel).subscribe(
      url => this.imgSrcForTownhall = url
    );
    this.heroes = this.heroMapperService.mapHeroList(this.playerResult.heroes);
  }
}
