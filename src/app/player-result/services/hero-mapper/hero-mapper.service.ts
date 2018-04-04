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

  mapHeroList(heroList: TroopsHeroesAndSpellType[]): Observable<HeroDisplay[]> {
    if (this.isArrayEmptyOrUndefined(heroList)) {
      return undefined;
    } else {
      return this.mapHeroTypeToDisplayHeroType(heroList);
    }
  }

  private mapHeroTypeToDisplayHeroType(heroList: TroopsHeroesAndSpellType[]): Observable<HeroDisplay[]> {
    const heroesWithImgArray: HeroDisplay[] = [];
    for (const hero of heroList) {
      Object.keys(Heroes).filter(HeroesKey => {
        if (hero.name === Heroes[HeroesKey]) {
          Object.keys(HeroesImg).filter(HeroesImgKey => {
            if (<Heroes>HeroesKey as string === <HeroesImg>HeroesImgKey as string) {
              this.storage.ref(HeroesImg[HeroesImgKey]).getDownloadURL().subscribe((data: HeroesImg) => {
                let heroObj = {
                  name: hero.name, level: hero.level, maxLevel: hero.maxLevel, village: hero.village, heroImg: data
                };
                heroesWithImgArray.push(heroObj);
              });
            }
          });
        }
      });
    }
    return Observable.of(heroesWithImgArray);
  }

  private isArrayEmptyOrUndefined(heroList: TroopsHeroesAndSpellType[]) {
    return isUndefined(heroList) || heroList.length === 0;
  }
}


