import { TestBed } from '@angular/core/testing';

import { RickapiService } from './rickapi.service';

describe('RickapiService', () => {
  let service: RickapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
