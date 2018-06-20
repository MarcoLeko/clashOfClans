import {TownhallHomePictureService} from './townhall-home-picture.service';
import {TownhallHomeImgSrc} from './townhall-home-img-src';
import {FirebaseStorageMock} from '../../../../testing/firebase-storage-mock';

describe('TownhallHomePictureService', () => {
  let mock: any;
  let service: TownhallHomePictureService;

  beforeEach(() => {
    mock = new FirebaseStorageMock();
    service = new TownhallHomePictureService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return townhall level by valid input', () => {
    const expectedTownhall: number = 9;
    const expectedPicture: string = TownhallHomeImgSrc.TOWNHALL_NINE;

    service.getTownHallPicture(expectedTownhall).subscribe(result => {
      expect(result).toMatch(expectedPicture);
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
