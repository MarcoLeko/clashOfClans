import {inject, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsResolveHelperService} from './troops-and-spells-resolve-helper.service';

describe('TroopsAndSpellsResolveHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroopsAndSpellsResolveHelperService]
    });
  });

  it('should be created', inject([TroopsAndSpellsResolveHelperService], (service: TroopsAndSpellsResolveHelperService) => {
    expect(service).toBeTruthy();
  }));
});
