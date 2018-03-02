import {inject, TestBed} from '@angular/core/testing';

import {HeaderInterceptorService} from "./header-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PlayerSearchService} from "../player-search/player-search.service";
import {HashTransformerService} from "../../../shared/domain/hash-transformer.service";
import {Mocks} from "../../../testing/mocks";

describe('HeaderInterceptorService', () => {
  const testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2Nh' +
    'NSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJkNGRlNjdhLWY4OTMtNGM4ZC04M2ViLTZjOTQ2' +
    'MWMxZjgwMCIsImlhdCI6MTUxOTk5MTY3NCwic3ViIjoiZGV2ZWxvcGVyLzFjZTE4NzU2LTNkMjAtZjlhZi1lOWVkLTg2YmU4MGEzYjdlMiIsInNjb' +
    '3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIj' +
    'kxLjE1LjExOC4yMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.u6fUAsIMTZ4AR-l_MXNKKU7oeZrglYNsE9--AN0V8jyPlnwtP2uXIIVXZj-zpFGGmbN1r' +
    'FdJrmoHDB_eHZMTlg';

  let service: PlayerSearchService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlayerSearchService,
        HashTransformerService,
        HeaderInterceptorService,
        {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true}]
    });

    service = TestBed.get(PlayerSearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should initialize',  inject([HeaderInterceptorService], (underTest: HeaderInterceptorService) => {
    expect(underTest).toBeTruthy();
  }));

  it('should add an Authorization header', () => {
    service.getPlayer(Mocks.PLAYERTAG).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne('v1/players/%239P9UG92CG');
    expect(httpRequest.request.headers.get('Authorization')).toBe('Bearer ' + testToken);
  });
});
