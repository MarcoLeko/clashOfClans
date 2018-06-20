import {TownhallNightPictureService} from './townhall-night-picture.service';
import {TownhallHomePictureService} from '../home/townhall-home-picture.service';
import {FirebaseStorageMock} from '../../../../testing/firebase-storage-mock';

describe('TownhallNightPictureService', () => {
  let mock: any;
  let service: TownhallHomePictureService;

  beforeEach(() => {
    mock = new FirebaseStorageMock();
    service = new TownhallHomePictureService(mock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
