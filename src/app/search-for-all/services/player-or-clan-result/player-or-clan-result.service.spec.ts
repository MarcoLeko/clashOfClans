import {inject, TestBed} from '@angular/core/testing';

import {PlayerOrClanResultService} from './player-or-clan-result.service';
import {PlayerSearchService} from '../../../shared/services/player-search/player-search.service';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';

describe('PlayerOrClanResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ClanSearchService},
        {provide: PlayerSearchService},
        PlayerOrClanResultService]
    });
  });

  it('should be created', inject([PlayerOrClanResultService], (service: PlayerOrClanResultService) => {
    expect(service).toBeTruthy();
  }));
});
