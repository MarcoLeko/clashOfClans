import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {TroopsHeroesAndSpellType} from '../../../../generated/types';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TroopsAndSpellsResolveHelperService {


  constructor(private storage: AngularFireStorage) {
  }

  public extractedLockedTroopsOrSpells(urlPrefix: string, playerTroopsOrSpells: TroopsHeroesAndSpellType[],
                                       imageSuffix: string, observables: any[], enumObj: any): void {
    Object.keys(enumObj).filter((img) => {
      if (playerTroopsOrSpells.findIndex(x => x.name === enumObj[img]) === -1) {
        const singleObservable: Observable<any> =
          this.storage.ref(urlPrefix + enumObj[img] + imageSuffix)
            .getDownloadURL().map((url: string | null) => {
            const objStat = {
              name: enumObj[img], level: undefined,
              maxLevel: undefined, url: url, isUnlocked: false
            };
            return objStat;
          });
        observables.push(singleObservable);
      }
    });
  }

  public extractUnlockedTroopsOrSpells(urlPrefix: string, playerTroopsOrSpells: TroopsHeroesAndSpellType[],
                                       imageSuffix: string, observables: any[], enumObj: any): void {
    for (const img in enumObj) {
      for (const troopOrSpell of playerTroopsOrSpells) {
        if (enumObj[img] === troopOrSpell.name) {
          const singleObservable: Observable<any> =
            this.storage.ref(urlPrefix + enumObj[img] + imageSuffix)
              .getDownloadURL().map((url: string | null) => {
              const objStat = {
                name: troopOrSpell.name, level: troopOrSpell.level,
                maxLevel: troopOrSpell.maxLevel, url: url, isUnlocked: true
              };
              return objStat;
            });
          observables.push(singleObservable);
        }
      }
    }
  }

  public convertTroopsHome(troops: TroopsHeroesAndSpellType[], filterValue: string): TroopsHeroesAndSpellType[] {
    const filteredTroops = troops.filter((troop) => troop.village === filterValue);
    filteredTroops.forEach(obj => obj.name = obj.name.split('.').join('').toString());
    return filteredTroops;
  }
}
