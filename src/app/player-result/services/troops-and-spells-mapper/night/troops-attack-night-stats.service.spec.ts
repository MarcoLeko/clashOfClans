import {TestBed} from '@angular/core/testing';

import {AngularFirestore} from 'angularfire2/firestore';
import {TroopsNightAttackStatsService} from './troops-night-attack-stats.service';
import {FirebaseFirestoreMock} from '../../../../testing/firebase-firestore-mock';

describe('TroopsNightAttackStatsService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroopsNightAttackStatsService, {provide: AngularFirestore, useClass: FirebaseFirestoreMock}]
    });
    service = TestBed.get(TroopsNightAttackStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
