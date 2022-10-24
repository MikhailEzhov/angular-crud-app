import { TestBed } from '@angular/core/testing';

import { ServerDataChangesService } from './server-data-changes.service';

describe('ServerDataChangesService', () => {
  let service: ServerDataChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDataChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
