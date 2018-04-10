import {TownhallPictureService} from './townhall-picture.service';
import {TownhallImgSrc} from './townhall-src';
import {FirebaseMock} from '../../../testing/firebase-mock';

describe('TownhallPictureService', () => {
  let mock: any;
  let service: TownhallPictureService;

  beforeEach(() => {
    mock = new FirebaseMock();
    service = new TownhallPictureService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return townhall level by valid input', () => {
    const expectedTownhall: number = 9;
    const expectedPicture: string = TownhallImgSrc.TOWNHALL_NINE;

    service.getTownHallPicture(expectedTownhall).subscribe(result => {
      expect(result).toBe(expectedPicture);
    });
  });

  it('should return undefined by invalid input', () => {
    const expectedTownhall: number = 0;
    const expectedPicture: string = undefined;
    service.getTownHallPicture(expectedTownhall).subscribe(result => {
      expect(result).toBe(expectedPicture);
    });
  });
});
