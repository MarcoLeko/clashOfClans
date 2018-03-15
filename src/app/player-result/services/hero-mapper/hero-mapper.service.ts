import {Injectable} from '@angular/core';
import {TroopsHeroesAndSpellType} from '../../../../generated/types';
import {HeroDisplay} from './hero-display';
import {isUndefined} from 'util';
import {Heroes} from './heroes';
import {HeroesImg} from './heroes-img';

@Injectable()
export class HeroMapperService {

  mapHeroList(heroList: TroopsHeroesAndSpellType[]): HeroDisplay[] {
    if (this.isArrayEmptyOrUndefined(heroList)) {
      return undefined;
    } else {
      return this.mapHeroTypeToDisplayHeroType(heroList);
    }
  }

  private mapHeroTypeToDisplayHeroType(heroList: TroopsHeroesAndSpellType[]) {
    const heroesWithImgArray: HeroDisplay[] = [];
    for (let hero of heroList) {
      let firstEnumCompareObj: string;
      let secondEnumCompareObj: string;
      let heroDisplayObj: HeroDisplay;
      Object.keys(Heroes).filter(key => {
        if (hero.name === Heroes[key]) {
          firstEnumCompareObj = <Heroes>key;
          Object.keys(HeroesImg).filter(key => {
            secondEnumCompareObj = <HeroesImg>key;
            if (firstEnumCompareObj === secondEnumCompareObj) {
              heroDisplayObj = {
                name: hero.name,
                level: hero.level,
                maxLevel: hero.maxLevel,
                village: hero.village,
                heroImg: HeroesImg[key]
              };
              heroesWithImgArray.push(heroDisplayObj);
            }
          });
        }
      });
    }
    return heroesWithImgArray;
  }

  private isArrayEmptyOrUndefined(heroList: TroopsHeroesAndSpellType[]) {
    return isUndefined(heroList) || heroList.length === 0;
  }
}


