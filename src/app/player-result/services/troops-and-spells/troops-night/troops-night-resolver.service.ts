import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {TroopsNightDisplayTypes} from './troops-night-display.types';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TroopsNightImg} from './troops-night-img.types';

@Injectable()
export class TroopsNightResolverService {

  public troopsNightCache: TroopsNightDisplayTypes[] = [];
  public playerTag: string;

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getTroopsNight(player: PlayerByPlayerTagType): Observable<TroopsNightDisplayTypes[]> {
    if (this.playerTag === player.tag && this.troopsNightCache.length !== 0) {
      return Observable.of(this.troopsNightCache);
    } else {
      this.playerTag = player.tag;
      const nightTroops = this.troopsAndSpellsService.convertTroopsHome(player.troops, 'builderBase');
      const urlPrefix: string = 'troops-night/';
      const imageSuffix: string = '.png';
      const observables = [];
      this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, nightTroops, imageSuffix, observables, this.troopsNightCache, TroopsNightImg);
      this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, nightTroops, imageSuffix, observables, this.troopsNightCache, TroopsNightImg);

      return Observable.forkJoin(observables);
    }
  }
}
