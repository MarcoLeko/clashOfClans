import {inject, TestBed} from '@angular/core/testing';

import {CompleteClanMemberStatsService} from './complete-clan-member-stats.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {PlayerSearchService} from '../../../shared/services/player-search/player-search.service';

describe('CompleteClanMemberStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: ClanSearchService},
        {provide: PlayerSearchService},
        CompleteClanMemberStatsService]
    });
  });

  it('should be created', inject([CompleteClanMemberStatsService], (service: CompleteClanMemberStatsService) => {
    expect(service).toBeTruthy();
  }));
});
