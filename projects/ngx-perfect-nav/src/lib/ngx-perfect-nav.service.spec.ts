import { TestBed } from '@angular/core/testing';

import { NgxPerfectNavService } from './ngx-perfect-nav.service';

describe('NgxPerfectNavService', () => {
  let service: NgxPerfectNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPerfectNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
