import { TestBed } from '@angular/core/testing';

import { ProjectstatisticsService } from './projectstatistics.service';

describe('ProjectstatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectstatisticsService = TestBed.get(ProjectstatisticsService);
    expect(service).toBeTruthy();
  });
});
