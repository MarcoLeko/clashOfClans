import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {SpellsHomeDisplayTypes} from './spells-home-display.types';
import {SpellsHomeImg} from './spells-home-img.types';

@Injectable()
export class SpellsHomeResolverService {

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getSpellsHome(player: PlayerByPlayerTagType): Observable<SpellsHomeDisplayTypes[]> {
      const urlPrefix = 'spells/';
      const imageSuffix = '.png';
      const observables = [];
      this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, player.spells, imageSuffix, observables, SpellsHomeImg);
      this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, player.spells, imageSuffix, observables, SpellsHomeImg);

      return Observable.forkJoin(observables);
  }
}
