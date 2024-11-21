import { TestBed } from '@angular/core/testing';

import { MediatorserviceService } from './mediatorservice.service';

describe('MediatorserviceService', () => {
  let service: MediatorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediatorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
