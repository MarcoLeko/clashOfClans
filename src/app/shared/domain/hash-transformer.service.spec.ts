import {inject, TestBed} from '@angular/core/testing';

import {HashTransformerService} from "./hash-transformer.service";

describe('HashTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      HashTransformerService
  ],
    });
  });

  it('should be created', inject([HashTransformerService], (service: HashTransformerService) => {
    expect(service).toBeTruthy();
  }));

  it('should be transform # if has #', inject([HashTransformerService], (service: HashTransformerService) => {
    const inputUrl: string = '#Blub';
    const expectedUrl: string = '%23Blub';
    expect(service.transformHash(inputUrl)).toBe(expectedUrl);
  }));

  it('should not transform if has not #', inject([HashTransformerService], (service: HashTransformerService) => {
    const inputUrl: string = 'Blub';
    const expectedUrl: string = 'Blub';
    expect(service.transformHash(inputUrl)).toBe(expectedUrl);
  }));

  it('should not transform if is undefined', inject([HashTransformerService], (service: HashTransformerService) => {
    const inputUrl: undefined = undefined;
    const expectedUrl: string = 'Blub';
    expect(service.transformHash(inputUrl)).toBe(undefined);
  }));
});
