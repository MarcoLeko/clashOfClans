import {TestBed} from '@angular/core/testing';

import {TroopsHomeAttackStatsService} from './troops-home-attack-stats.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {FirebaseFirestoreMock} from '../../../../testing/firebase-firestore-mock';

describe('TroopsHomeAttackStatsService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroopsHomeAttackStatsService, {provide: AngularFirestore, useClass: FirebaseFirestoreMock}]
    });
    service = TestBed.get(TroopsHomeAttackStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
