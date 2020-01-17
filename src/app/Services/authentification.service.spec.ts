import { TestBed } from '@angular/core/testing';

import { AuthentificationServiceService } from './authentication.service';

describe('AuthentificationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentificationServiceService = TestBed.get(AuthentificationServiceService);
    expect(service).toBeTruthy();
  });
});
