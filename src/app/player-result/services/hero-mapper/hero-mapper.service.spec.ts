import {inject, TestBed} from '@angular/core/testing';

import {HeroMapperService} from './hero-mapper.service';
import {Mocks} from '../../../testing/mocks';
import {HeroDisplay} from './hero-display';
import {TroopsHeroesAndSpellType} from '../../../../generated/types';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseMock} from '../../../testing/firebase-mock';

describe('HeroMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroMapperService, {provide: AngularFireStorage, useClass: FirebaseMock}]
    });
  });

  it('should be created', inject([HeroMapperService], (service: HeroMapperService) => {
    expect(service).toBeTruthy();
  }));

  it('should return display hero type', inject([HeroMapperService], (service: HeroMapperService) => {
    const heroList: TroopsHeroesAndSpellType[] = Mocks.PLAYERSTATSBYPLAYERTAG.heroes;
    const expectedResult: HeroDisplay[] = Mocks.DISPLAYHEROOBJ;
    service.mapHeroList(heroList).subscribe(result => {
      expect(result).toEqual(expectedResult);
    });
  }));

  it('should return undefined if heroList is empty', inject([HeroMapperService], (service: HeroMapperService) => {
    const heroList: TroopsHeroesAndSpellType[] = [];
    const expectedResult: HeroDisplay[] = undefined;
    service.mapHeroList(heroList).subscribe(result => {
      expect(result).toEqual(expectedResult);
    });
  }));

  it('should return undefined if heroList is undefined', inject([HeroMapperService], (service: HeroMapperService) => {
    const heroList: TroopsHeroesAndSpellType[] = undefined;
    const expectedResult: HeroDisplay[] = undefined;
    service.mapHeroList(heroList).subscribe(result => {
      expect(result).toEqual(expectedResult);
    });
  }));
});
