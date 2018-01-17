import { TestBed, inject } from '@angular/core/testing';

import { ServicenameService } from './servicename.service';

describe('ServicenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicenameService]
    });
  });

  it('should be created', inject([ServicenameService], (service: ServicenameService) => {
    expect(service).toBeTruthy();
  }));
});
