import {inject, TestBed} from '@angular/core/testing';

import {PlayerSearchService} from './player-search.service';
import {HashTransformerService} from "../../../shared/domain/hash-transformer.service";
import {XHRBackend} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {HttpClientModule} from "@angular/common/http";

describe('PlayerSearchService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        PlayerSearchService,
        HashTransformerService,
        {provide: XHRBackend, useClass: MockBackend}
      ],
    });
  });

  it('should be created', inject([PlayerSearchService], (service: PlayerSearchService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return observable of PlayerByPlayerTag obj', inject([PlayerSearchService, XHRBackend], (service, mockBackend) => {
  //   const mockResponse: PlayerByPlayerTagType = Mocks.PLAYERSTATSBYPLAYERTAG;
  //
  //   mockBackend.connections.subscribe(connection => {
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body: JSON.stringify(mockResponse)
  //     })));
  //   });
  //   service.getPlayer(Mocks.PLAYERTAG).subscribe(player => {
  //     expect(true).toBe(false);
  //   })
  // }));
});
