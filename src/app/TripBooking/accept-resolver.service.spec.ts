import { TestBed } from '@angular/core/testing';

import { AcceptResolverService } from './accept-resolver.service';

describe('AcceptResolverService', () => {
  let service: AcceptResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
