import {TroopsHomeAttackStatsDisplayService} from './troops-home-attack-stats-display.service';
import {TestBed} from '@angular/core/testing';
import {TroopsHomeAttackStatsService} from '../troops-home-attack-stats.service';
import {Mocks} from '../../../../../testing/mocks';
import {Observable} from 'rxjs/Observable';

describe('TroopsHomeAttackStatsDisplayService', () => {
  const serviceMock = {
    getTroopsStats: jasmine.createSpy('getTroopsStats')
  };
  let service: TroopsHomeAttackStatsDisplayService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroopsHomeAttackStatsDisplayService, {provide: TroopsHomeAttackStatsService, useValue: serviceMock}]
    });
    service = TestBed.get(TroopsHomeAttackStatsDisplayService);
  });

  it('should create service', () => {
    expect(service).toBeDefined();
  });

  it('should call spy', () => {
    const spy = serviceMock.getTroopsStats.and.returnValue(Observable.of({
      [`${'barbarian'}`]: {
        [`${'Level: 6'}`]: {
          dph: 26,
          dps: 26,
          hp: 110,
          townhall: 9
        }
      }
    }));
    service.getTroopsDisplayStats(Mocks.PLAYERSTATSBYPLAYERTAG.troops).subscribe(result => {
      expect(spy).toHaveBeenCalled();
      expect(result[0].name).toEqual(Mocks.TROOPHOMEDISPLAYATTACKSTATS.name);
    });
  });
});
