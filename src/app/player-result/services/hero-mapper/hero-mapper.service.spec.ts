import {inject, TestBed} from '@angular/core/testing';

import {HeroMapperService} from './hero-mapper.service';
import {Mocks} from '../../../testing/mocks';
import {HeroDisplay} from './hero-display';
import {TroopsHeroesAndSpellType} from '../../../../generated/types';
import {Heroes} from './heroes';
import {HeroesImg} from './heroes-img';

describe('HeroMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroMapperService]
    });
  });

  it('should be created', inject([HeroMapperService], (service: HeroMapperService) => {
    expect(service).toBeTruthy();
  }));

  it('should return display hero type', inject([HeroMapperService], (service: HeroMapperService) => {
    const heroList: TroopsHeroesAndSpellType[] = Mocks.PLAYERSTATSBYPLAYERTAG.heroes;
    const expectedResult: HeroDisplay[] = [
      {
        name: Heroes.BARBARIAN_KING,
        level: 23,
        maxLevel: 50,
        village: 'kjfsölksd',
        heroImg: HeroesImg.BARBARIAN_KING
      },
      {
        name: Heroes.ARCHER_QUEEN,
        level: 45,
        maxLevel: 50,
        village: 'kjfsölksd',
        heroImg: HeroesImg.ARCHER_QUEEN
      },
      {
        name: Heroes.GRAND_WARDEN,
        level: 18,
        maxLevel: 50,
        village: 'kjfsölksd',
        heroImg: HeroesImg.GRAND_WARDEN
      }, {
        name: Heroes.BATTLE_MACHINE,
        level: 25,
        maxLevel: 50,
        village: 'kjfsölksd',
        heroImg: HeroesImg.BATTLE_MACHINE
      }
    ];
    expect(service.mapHeroList(heroList)).toEqual(expectedResult);
  }));

  it('should return undefined if heroList is empty', inject([HeroMapperService], (service: HeroMapperService) => {
    const heroList: TroopsHeroesAndSpellType[] = [];
    const expectedResult: HeroDisplay[] = undefined;
    expect(service.mapHeroList(heroList)).toEqual(expectedResult);
  }));

  it('should return undefined if heroList is undefined', inject([HeroMapperService], (service: HeroMapperService) => {
    const heroList: TroopsHeroesAndSpellType[] = undefined;
    const expectedResult: HeroDisplay[] = undefined;
    expect(service.mapHeroList(heroList)).toEqual(expectedResult);
  }));
});
