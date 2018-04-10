import {inject, TestBed} from '@angular/core/testing';

import {BuilderInfoService} from './builder-info.service';
import {Mocks} from '../../../testing/mocks';
import {FirebaseMock} from '../../../testing/firebase-mock';
import {AngularFireStorage} from 'angularfire2/storage';

describe('BuilderInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuilderInfoService, {provide: AngularFireStorage, useClass: FirebaseMock}]
    });
  });

  it('should be created', inject([BuilderInfoService], (service: BuilderInfoService) => {
    expect(service).toBeTruthy();
  }));

  it('should get builderhall type', inject([BuilderInfoService], (service: BuilderInfoService) => {
    const expectedBase: string = 'home';
    service.getBuilderInfoType(expectedBase).subscribe(result => {
      expect(result).toEqual(Mocks.BUILDERINFOMOCK);
    })
  }));
});
