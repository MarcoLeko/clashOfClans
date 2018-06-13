import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {TroopsNightDisplayTypes} from './troops-night-display.types';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TroopsNightImg} from './troops-night-img.types';

@Injectable()
export class TroopsNightResolverService {

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getTroopsNight(player: PlayerByPlayerTagType): Observable<TroopsNightDisplayTypes[]> {
      const nightTroops = this.troopsAndSpellsService.convertTroopsHome(player.troops, 'builderBase');
      const urlPrefix = 'troops-night/';
      const imageSuffix = '.png';
      const observables = [];
      this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, nightTroops, imageSuffix, observables, TroopsNightImg);
      this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, nightTroops, imageSuffix, observables, TroopsNightImg);

      return Observable.forkJoin(observables);
  }
}
