import {AdvancedSpellsHomeStatsService} from './advanced-spells-home-stats.service';
import {FirebaseFirestoreMock} from '../../../../../testing/firebase-firestore-mock';

describe('TroopsHomeAttackStatsService', () => {
  let service: AdvancedSpellsHomeStatsService;
  let mock: any;
  beforeEach(() => {
    mock = new FirebaseFirestoreMock();
    service = new AdvancedSpellsHomeStatsService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return stub', () => {
    const path: any = '/spells_home/TxBYg45aEEbujvaUfrR5';
    service.getSpellsStats().subscribe(result => {
      expect(result).toBe(path);
    });
  });
});
