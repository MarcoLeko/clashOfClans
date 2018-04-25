import {TestBed} from '@angular/core/testing';
import {Mocks} from '../../../../../testing/mocks';
import {Observable} from 'rxjs/Observable';
import {SpellsHomeStatsDisplayService} from './spells-home-stats-display.service';
import {AdvancedSpellsHomeStatsService} from '../home-spells/advanced-spells-home-stats.service';

describe('SpellsHomeStatsDisplayService', () => {
  const serviceMock = {
    getSpellsStats: jasmine.createSpy('getSpellsStats')
  };
  let service: SpellsHomeStatsDisplayService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpellsHomeStatsDisplayService, {provide: AdvancedSpellsHomeStatsService, useValue: serviceMock}]
    });
    service = TestBed.get(SpellsHomeStatsDisplayService);
  });

  it('should create service', () => {
    expect(service).toBeDefined();
  });

  it('should call spy', () => {
    const spy = serviceMock.getSpellsStats.and.returnValue(Observable.of({
      [`${'Rage Spell'}`]: {
        [`${'Level 5'}`]: {
          [`${'housing space'}`]: 2,
          rage: 170,
          townhall: 8,
          type: 'rage'
        }
      }
    }));
    service.getSpellsDisplayHomeStats(Mocks.PLAYERSTATSBYPLAYERTAG.spells).subscribe(result => {
        expect(spy).toHaveBeenCalled();
        expect(result[0].name).toEqual(Mocks.SPELLSHOMEDISPLAYSTATS.name);
      });
  });
});
