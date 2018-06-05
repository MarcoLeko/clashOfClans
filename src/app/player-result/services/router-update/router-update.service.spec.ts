import {inject, TestBed} from '@angular/core/testing';

import {RouterUpdateService} from './router-update.service';

describe('RouterUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterUpdateService]
    });
  });

  it('should be created', inject([RouterUpdateService], (service: RouterUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
