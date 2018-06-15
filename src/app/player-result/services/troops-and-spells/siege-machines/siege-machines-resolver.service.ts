import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {SiegeMachinesDisplayTypes} from './siege-machines-display.types';
import {SiegeMachinesImgTypes} from './siege-machines-img.types';

@Injectable()
export class SiegeMachinesResolverService {

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getSiegeMachines(player: PlayerByPlayerTagType): Observable<SiegeMachinesDisplayTypes[]> {
    const urlPrefix = 'siege_machines/';
    const imageSuffix = '.png';
    const observables = [];
    this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, player.troops, imageSuffix, observables, SiegeMachinesImgTypes);
    this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, player.troops, imageSuffix, observables, SiegeMachinesImgTypes);

    return Observable.forkJoin(observables);
  }
}
