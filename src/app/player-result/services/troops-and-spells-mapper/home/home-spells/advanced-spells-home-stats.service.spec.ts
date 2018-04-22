import {TestBed} from '@angular/core/testing';

import {AngularFirestore} from 'angularfire2/firestore';
import {AdvancedSpellsHomeStatsService} from './advanced-spells-home-stats.service';
import {FirebaseFirestoreMock} from '../../../../../testing/firebase-firestore-mock';

describe('AdvancedSpellsHomeStatsService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvancedSpellsHomeStatsService, {provide: AngularFirestore, useClass: FirebaseFirestoreMock}]
    });
    service = TestBed.get(AdvancedSpellsHomeStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
