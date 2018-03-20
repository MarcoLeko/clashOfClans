import {inject, TestBed} from '@angular/core/testing';

import {BuilderInfoService} from './builder-info.service';
import {Mocks} from '../../../testing/mocks';

describe('BuilderInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuilderInfoService]
    });
  });

  it('should be created', inject([BuilderInfoService], (service: BuilderInfoService) => {
    expect(service).toBeTruthy();
  }));

  it('should get builderhall type', inject([BuilderInfoService], (service: BuilderInfoService) => {
    const expectedBase: string = 'home';

    expect(service.getBuilderInfoType(expectedBase)).toEqual(Mocks.BUILDERINFOMOCK);
  }));
});
