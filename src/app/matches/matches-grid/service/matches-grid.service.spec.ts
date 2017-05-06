/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchesGridService } from './matches-grid.service';

describe('MatchesGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchesGridService]
    });
  });

  it('should ...', inject([MatchesGridService], (service: MatchesGridService) => {
    expect(service).toBeTruthy();
  }));
});
