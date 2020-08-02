import { TestBed } from '@angular/core/testing';

import { ProcessHttpmssgService } from './process-httpmssg.service';

describe('ProcessHttpmssgService', () => {
  let service: ProcessHttpmssgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessHttpmssgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
