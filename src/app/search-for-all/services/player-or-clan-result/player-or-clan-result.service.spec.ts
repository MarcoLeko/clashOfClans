import {inject, TestBed} from '@angular/core/testing';

import {PlayerOrClanResultService} from './player-or-clan-result.service';

describe('PlayerOrClanResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerOrClanResultService]
    });
  });

  it('should be created', inject([PlayerOrClanResultService], (service: PlayerOrClanResultService) => {
    expect(service).toBeTruthy();
  }));
});
