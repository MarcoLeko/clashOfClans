import {FirebaseFirestoreMock} from '../../../../testing/firebase-firestore-mock';
import {TroopsNightAttackStatsService} from './troops-night-attack-stats.service';

describe('TroopsHomeAttackStatsService', () => {
  let service: TroopsNightAttackStatsService;
  let mock: any;
  beforeEach(() => {
    mock = new FirebaseFirestoreMock();
    service = new TroopsNightAttackStatsService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return stub', () => {
    const path: any = '/troops_night/F1sGTa97qmmVebiJtjhY';
    service.getTroopsStats().subscribe(result => {
      expect(result).toBe(path);
    });
  });
});
