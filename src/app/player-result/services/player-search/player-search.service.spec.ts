import { inject, TestBed } from '@angular/core/testing';

import { PlayerSearchService } from './player-search.service';
import { HashTransformerService } from '../../../shared/domain/hash-transformer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Mocks } from '../../../testing/mocks';

describe('PlayerSearchService', () => {

  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlayerSearchService,
        HashTransformerService
      ],
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([PlayerSearchService], (service: PlayerSearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should return observable of PlayerByPlayerTag', inject([PlayerSearchService, HashTransformerService], (service, hashTransformer) => {
    service.getPlayer(Mocks.PLAYERTAG).subscribe(data => {
      expect(data).toEqual(Mocks.PLAYERSTATSBYPLAYERTAG);
    });

    const req = httpMock.expectOne(PlayerSearchService.PLAYERURL + hashTransformer.transformHash(Mocks.PLAYERTAG));
    expect(req.request.method).toBe("GET");
    req.flush(Mocks.PLAYERSTATSBYPLAYERTAG);
  }));
});
