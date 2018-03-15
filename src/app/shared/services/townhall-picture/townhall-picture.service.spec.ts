import {inject, TestBed} from '@angular/core/testing';

import {TownhallPictureService} from './townhall-picture.service';
import {TownhallImgSrc} from './townhall-src';

describe('TownhallPictureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownhallPictureService]
    });
  });

  it('should be created', inject([TownhallPictureService], (service: TownhallPictureService) => {
    expect(service).toBeTruthy();
  }));

  it('should be return townhall level by valid input', inject(
    [TownhallPictureService], (service: TownhallPictureService) => {
    const expectedTownhall: number = 9;
    const expectedPicture: string = TownhallImgSrc.TOWNHALL_NINE;
    expect(service.getTownHallPicture(expectedTownhall)).toBe(expectedPicture);
  }));

  it('should be return undefined by invalid input', inject(
    [TownhallPictureService], (service: TownhallPictureService) => {
      const expectedTownhall: number = 0;
      const expectedPicture: string = undefined;
      expect(service.getTownHallPicture(expectedTownhall)).toBe(expectedPicture);
    }));
});
