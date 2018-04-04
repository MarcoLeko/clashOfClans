import {Injectable} from '@angular/core';
import {TroopsHeroesAndSpellType} from '../../../../generated/types';
import {HeroDisplay} from './hero-display';
import {isUndefined} from 'util';
import {Heroes} from './heroes';
import {HeroesImg} from './heroes-img';
import {AngularFireStorage} from 'angularfire2/storage';

@Injectable()
export class HeroMapperService {

  constructor(private storage: AngularFireStorage) {
  }

  mapHeroList(heroList: TroopsHeroesAndSpellType[]): HeroDisplay[] {
    if (this.isArrayEmptyOrUndefined(heroList)) {
      return undefined;
    } else {
      return this.mapHeroTypeToDisplayHeroType(heroList);
    }
  }

  private mapHeroTypeToDisplayHeroType(heroList: TroopsHeroesAndSpellType[]): HeroDisplay[] {
    const heroesWithImgArray: HeroDisplay[] = [];
    for (const hero of heroList) {
      for (const heroesKey in Heroes) {
        if (hero.name === Heroes[heroesKey]) {
          for (const heroesImgKey in HeroesImg) {
            if (<Heroes>heroesKey as string === <HeroesImg>heroesImgKey) {
              this.storage.ref(HeroesImg[heroesImgKey]).getDownloadURL().subscribe((data: HeroesImg) => {
                let heroObj = {
                  name: hero.name, level: hero.level, maxLevel: hero.maxLevel, village: hero.village, heroImg: data
                };
                heroesWithImgArray.push(heroObj);
              });
            }
          }
        }
      }
    }
    return heroesWithImgArray;
  }

  private isArrayEmptyOrUndefined(heroList: TroopsHeroesAndSpellType[]) {
    return isUndefined(heroList) || heroList.length === 0;
  }
}


