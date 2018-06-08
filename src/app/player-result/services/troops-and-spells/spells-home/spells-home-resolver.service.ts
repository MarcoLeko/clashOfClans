import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {TroopsAndSpellsResolveHelperService} from '../troops-and-spells-resolve-helper.service';
import {PlayerByPlayerTagType} from '../../../../../generated/types';
import {SpellsHomeDisplayTypes} from './spells-home-display.types';
import {SpellsHomeImg} from './spells-home-img.types';

@Injectable()
export class SpellsHomeResolverService {

  public spellsHomeCache: SpellsHomeDisplayTypes[] = [];
  public playerTag: string;

  constructor(private storage: AngularFireStorage, private troopsAndSpellsService: TroopsAndSpellsResolveHelperService) {
  }

  public getSpellsHome(player: PlayerByPlayerTagType): Observable<SpellsHomeDisplayTypes[]> {
    if (this.playerTag === player.tag && this.spellsHomeCache.length !== 0) {
      return Observable.of(this.spellsHomeCache);
    } else {
      this.playerTag = player.tag;
      const urlPrefix: string = 'spells/';
      const imageSuffix: string = '.png';
      const observables = [];
      this.troopsAndSpellsService.extractUnlockedTroopsOrSpells(urlPrefix, player.spells, imageSuffix, observables, this.spellsHomeCache, SpellsHomeImg);
      this.troopsAndSpellsService.extractedLockedTroopsOrSpells(urlPrefix, player.spells, imageSuffix, observables, this.spellsHomeCache, SpellsHomeImg);

      return Observable.forkJoin(observables);
    }
  }
}
