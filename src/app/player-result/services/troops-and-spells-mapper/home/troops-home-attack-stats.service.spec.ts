import {TroopsHomeAttackStatsService} from './troops-home-attack-stats.service';
import {FirebaseFirestoreMock} from '../../../../testing/firebase-firestore-mock';

describe('TroopsHomeAttackStatsService', () => {
  let service: TroopsHomeAttackStatsService;
  let mock: any;
  beforeEach(() => {
    mock = new FirebaseFirestoreMock();
    service = new TroopsHomeAttackStatsService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return stub', () => {
    const path: any = '/troops_home/jtHhrhSDkbcqWxPinRvf';
    service.getTroopsStats().subscribe(result => {
      expect(result).toBe(path);
    });
  });
});
