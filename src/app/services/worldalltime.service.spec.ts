import { TestBed } from '@angular/core/testing';

import { WorldalltimeService } from './worldalltime.service';

describe('WorldalltimeService', () => {
  let service: WorldalltimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldalltimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
