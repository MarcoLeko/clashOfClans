import {inject, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsResolveHelperService} from './troops-and-spells-resolve-helper.service';
import {AngularFireStorage} from 'angularfire2/storage';
import {FirebaseStorageMock} from '../../../testing/firebase-storage-mock';

describe('TroopsAndSpellsResolveHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFireStorage, useClass: FirebaseStorageMock},
        TroopsAndSpellsResolveHelperService]
    });
  });

  it('should be created', inject([TroopsAndSpellsResolveHelperService], (service: TroopsAndSpellsResolveHelperService) => {
    expect(service).toBeTruthy();
  }));
});
