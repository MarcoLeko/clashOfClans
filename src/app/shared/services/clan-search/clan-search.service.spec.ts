import {inject, TestBed} from '@angular/core/testing';

import {ClanSearchService} from './clan-search.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HashTransformerService} from '../hash-transformer/hash-transformer.service';
import {Mocks} from '../../../testing/mocks';

describe('ClanSearchService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ClanSearchService,
        HashTransformerService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([ClanSearchService], (service: ClanSearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should return clanEmitter of clanByClanTag', inject([ClanSearchService, HashTransformerService], (service, hashTransformer) => {
    service.getClanByClanTag(Mocks.CLANTAG).subscribe(data => {
      expect(data).toEqual(Mocks.CLANSTATSBYCLANTAG);
    });

    const req = httpMock.expectOne(ClanSearchService.CLANURL + hashTransformer.transformHash(Mocks.CLANTAG));
    expect(req.request.method).toBe('GET');
    req.flush(Mocks.CLANSTATSBYCLANTAG);
  }));
});
