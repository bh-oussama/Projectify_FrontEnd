import { TestBed } from '@angular/core/testing';

import { RegistrationServiceService } from './registration-service.service';

describe('RegistrationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationServiceService = TestBed.get(RegistrationServiceService);
    expect(service).toBeTruthy();
  });
});
