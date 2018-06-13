import {inject, TestBed} from '@angular/core/testing';

import {TownhallNightPictureService} from './townhall-night-picture.service';

describe('TownhallNightPictureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownhallNightPictureService]
    });
  });

  it('should be created', inject([TownhallNightPictureService], (service: TownhallNightPictureService) => {
    expect(service).toBeTruthy();
  }));
});
