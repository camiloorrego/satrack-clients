import { TestBed, async, inject } from '@angular/core/testing';

import { UnAuthenticatedGuard } from './un-authenticated.guard';

describe('UnAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthenticatedGuard]
    });
  });

  it('should ...', inject([UnAuthenticatedGuard], (guard: UnAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
