import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TroopsHomeDisplayTypes} from './troops-home-display.types';
import {TroopsHomeImg} from './troops-home-img.types';

@Injectable()
export class TroopsHomeResolverService {

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getTroopsHome(player: PlayerByPlayerTagType): Observable<TroopsHomeDisplayTypes[]> {
      const homeTroops = this.troopsAndSpellsService.convertTroopsHome(player.troops, 'home');
      const urlPrefix = 'troops/';
      const imageSuffix = '.png';
      const observables = [];
      this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, homeTroops, imageSuffix, observables, TroopsHomeImg);
      this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, homeTroops, imageSuffix, observables, TroopsHomeImg);

      return Observable.forkJoin(observables);
  }
}
