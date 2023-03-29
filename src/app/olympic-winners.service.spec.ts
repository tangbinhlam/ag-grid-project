import { TestBed } from '@angular/core/testing';

import { OlympicWinnersService } from './olympic-winners.service';

describe('OlympicWinnersService', () => {
  let service: OlympicWinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlympicWinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
