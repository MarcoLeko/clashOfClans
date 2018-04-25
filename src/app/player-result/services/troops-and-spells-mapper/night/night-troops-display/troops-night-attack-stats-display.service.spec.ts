import {TestBed} from '@angular/core/testing';
import {Mocks} from '../../../../../testing/mocks';
import {Observable} from 'rxjs/Observable';
import {TroopsNightAttackStatsDisplayService} from './troops-night-attack-stats-display.service';
import {TroopsNightAttackStatsService} from '../troops-night-attack-stats.service';

describe('TroopsNightAttackStatsDisplayService', () => {
  const serviceMock = {
    getTroopsStats: jasmine.createSpy('getTroopsStats')
  };
  let service: TroopsNightAttackStatsDisplayService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroopsNightAttackStatsDisplayService, {provide: TroopsNightAttackStatsService, useValue: serviceMock}]
    });
    service = TestBed.get(TroopsNightAttackStatsDisplayService);
  });

  it('should create service', () => {
    expect(service).toBeDefined();
  });

  it('should call spy', () => {
    const spy = serviceMock.getTroopsStats.and.returnValue(Observable.of({
      [`${'Raged Barbarian'}`]: {
        [`${'Level: 14'}`]: {
          ability: 'rage',
          builderHall: 7,
          dph: 71.2,
          dps: 89,
          hp: 266
        }
      }
    }));
    service.getTroopsDisplayStats(Mocks.PLAYERSTATSBYPLAYERTAG.troops).subscribe(result => {
      expect(spy).toHaveBeenCalled();
      expect(result[0].name).toEqual(Mocks.TROOPNIGHTDISPLAYATTACKSTATS.name);
    });
  });
});
