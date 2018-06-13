import {Injectable} from '@angular/core';
import {TroopsHeroesAndSpellType} from '../../../../generated/types';
import {HeroDisplay} from './hero-display';
import {isUndefined} from 'util';
import {Heroes} from './heroes';
import {HeroesImg} from './heroes-img';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HeroMapperService {

  constructor(private storage: AngularFireStorage) {
  }

  mapHeroList(heroList: TroopsHeroesAndSpellType[]): Observable<HeroDisplay[] | undefined> {
    if (this.isArrayEmptyOrUndefined(heroList)) {
      return Observable.of(undefined);
    } else {
      return this.mapHeroTypeToDisplayHeroType(heroList);
    }
  }

  private mapHeroTypeToDisplayHeroType(heroList: TroopsHeroesAndSpellType[]): Observable<HeroDisplay[]> {
    const observables: Observable<HeroDisplay>[] = [];
    for (const hero of heroList) {
      for (const heroesKey in Heroes) {
        if (hero.name === Heroes[heroesKey]) {
          for (const heroesImgKey in HeroesImg) {
            if (<Heroes>heroesKey as string === <HeroesImg>heroesImgKey) {
              this.fillObservableArray(heroesImgKey, hero, observables);
            }
          }
        }
      }
    }
    return Observable.forkJoin(observables);
  }

  private fillObservableArray(heroesImgKey, hero, observables: Observable<HeroDisplay>[]) {
    const url = 'heroes/' + HeroesImg[heroesImgKey] + '.png';
    let heroObj: HeroDisplay;
    const singleHeroImgObservable =
      this.storage.ref(url).getDownloadURL().map(data => {
        return heroObj = {
          name: hero.name, level: hero.level, maxLevel: hero.maxLevel, village: hero.village, heroImg: data
        };
      });
    observables.push(singleHeroImgObservable);
  }

  private isArrayEmptyOrUndefined(heroList: TroopsHeroesAndSpellType[]): boolean {
    return isUndefined(heroList) || heroList.length === 0;
  }
}


