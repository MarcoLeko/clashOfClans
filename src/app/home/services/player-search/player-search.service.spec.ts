import {inject, TestBed} from '@angular/core/testing';

import {PlayerSearchService} from './player-search.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HashTransformerService} from "../../../shared/domain/hash-transformer.service";

describe('PlayerSearchService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PlayerSearchService,
        {provide: HashTransformerService}
        ],
    });
  });

  it('should be created', inject([PlayerSearchService], (service: PlayerSearchService) => {
    expect(service).toBeTruthy();
  }));
});
