import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {TroopsHomeDisplayTypes} from './troops-home-display.types';
import {TroopsHomeImg} from './troops-home-img.types';

@Injectable()
export class TroopsHomeResolverService {

  public troopHomeCache: TroopsHomeDisplayTypes[] = [];
  public playerTag: string;

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getTroopsHome(player: PlayerByPlayerTagType): Observable<TroopsHomeDisplayTypes[]> {
    if (this.playerTag === player.tag && this.troopHomeCache.length !== 0) {
      return Observable.of(this.troopHomeCache);
    } else {
      this.playerTag = player.tag;
      const homeTroops = this.troopsAndSpellsService.convertTroopsHome(player.troops, 'home');
      const urlPrefix: string = 'troops/';
      const imageSuffix: string = '.png';
      const observables = [];
      this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, homeTroops, imageSuffix, observables, this.troopHomeCache, TroopsHomeImg);
      this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, homeTroops, imageSuffix, observables, this.troopHomeCache, TroopsHomeImg);

      return Observable.forkJoin(observables);
    }
  }
}
