import {inject, TestBed} from '@angular/core/testing';

import {CompleteClanMemberStatsService} from './complete-clan-member-stats.service';

describe('CompleteClanMemberStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompleteClanMemberStatsService]
    });
  });

  it('should be created', inject([CompleteClanMemberStatsService], (service: CompleteClanMemberStatsService) => {
    expect(service).toBeTruthy();
  }));
});
