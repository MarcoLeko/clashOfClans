import {inject, TestBed} from '@angular/core/testing';

import {TroopsAndSpellsService} from './troops-and-spells.service';

describe('TroopsAndSpellsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroopsAndSpellsService]
    });
  });

  it('should be created', inject([TroopsAndSpellsService], (service: TroopsAndSpellsService) => {
    expect(service).toBeTruthy();
  }));
});
