import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {TroopsHomeImg} from './troops-home-img.types';
import {PlayerByPlayerTagType, TroopsHeroesAndSpellType} from '../../../../generated/types';
import {TroopsHomeDisplayTypes} from './troops-home-display.types';
import {Observable} from 'rxjs/Observable';
import {SpellsHomeDisplayTypes} from './spells-home-display.types';
import {SpellsHomeImg} from './spells-home-img.types';

@Injectable()
export class TroopsAndSpellsService {

  public troopHomeCache: TroopsHomeDisplayTypes[] = [];
  public spellsHomeCache: SpellsHomeDisplayTypes[] = [];
  public playerTag: string;

  constructor(private storage: AngularFireStorage) {
  }

  public getTroopsHome(player: PlayerByPlayerTagType): Observable<TroopsHomeDisplayTypes[]> {
    if (this.playerTag === player.tag && this.troopHomeCache.length !== 0) {
      return Observable.of(this.troopHomeCache);
    } else {
      this.playerTag = player.tag;
      const homeTroops = this.convertTroopsHome(player.troops);
      const urlPrefix: string = 'troops/';
      const imageSuffix: string = '.png';
      const observables = [];
      this.extractUnlockedTroopsOrSpells(urlPrefix, homeTroops, imageSuffix, observables, this.troopHomeCache, TroopsHomeImg);
      this.extractedLockedTroopsOrSpells(urlPrefix, homeTroops, imageSuffix, observables, this.troopHomeCache, TroopsHomeImg);

      return Observable.forkJoin(observables);
    }
  }

  public getSpellsHome(player: PlayerByPlayerTagType): Observable<SpellsHomeDisplayTypes[]> {
    if (this.playerTag === player.tag && this.spellsHomeCache.length !== 0) {
      return Observable.of(this.spellsHomeCache);
    } else {
      this.playerTag = player.tag;
      const urlPrefix: string = 'spells/';
      const imageSuffix: string = '.png';
      const observables = [];
      this.extractUnlockedTroopsOrSpells(urlPrefix, player.spells, imageSuffix, observables, this.spellsHomeCache, SpellsHomeImg);
      this.extractedLockedTroopsOrSpells(urlPrefix, player.spells, imageSuffix, observables, this.spellsHomeCache, SpellsHomeImg);

      return Observable.forkJoin(observables);
    }
  }

  private extractedLockedTroopsOrSpells(urlPrefix: string, playerTroopsOrSpells: TroopsHeroesAndSpellType[],
                                        imageSuffix: string, observables: any[], cacheArr: any[], enumObj: any): void {
    Object.keys(enumObj).filter((img) => {
      if (playerTroopsOrSpells.findIndex(x => x.name === enumObj[img]) === -1) {
        let singleObservable: Observable<any> =
          this.storage.ref(urlPrefix + enumObj[img] + imageSuffix)
            .getDownloadURL().map((url: string | null) => {
            let objStat = {
              name: enumObj[img], level: undefined,
              maxLevel: undefined, url: url, isUnlocked: false
            };
            cacheArr.push(objStat);
            return objStat;
          });
        observables.push(singleObservable);
      }
    });
  }

  private extractUnlockedTroopsOrSpells(urlPrefix: string, playerTroopsOrSpells: TroopsHeroesAndSpellType[],
                                        imageSuffix: string, observables: any[], cacheArr: any[], enumObj: any): void {
    for (const img in enumObj) {
      for (const troopOrSpell of playerTroopsOrSpells) {
        if (enumObj[img] === troopOrSpell.name) {
          let singleObservable: Observable<any> =
            this.storage.ref(urlPrefix + enumObj[img] + imageSuffix)
              .getDownloadURL().map((url: string | null) => {
              let objStat = {
                name: troopOrSpell.name, level: troopOrSpell.level,
                maxLevel: troopOrSpell.maxLevel, url: url, isUnlocked: true
              };
              cacheArr.push(objStat);
              return objStat;
            });
          observables.push(singleObservable);
        }
      }
    }
  }

  private convertTroopsHome(troops: TroopsHeroesAndSpellType[]) {
    const homeTroops = troops.filter((troop) => troop.village === 'home');
    homeTroops.forEach(obj => obj.name = obj.name.split('.').join('').toString());
    return homeTroops;
  }
}
