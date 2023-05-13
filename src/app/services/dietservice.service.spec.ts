import { TestBed } from '@angular/core/testing';

import { DietserviceService } from './dietservice.service';

describe('DietserviceService', () => {
  let service: DietserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
