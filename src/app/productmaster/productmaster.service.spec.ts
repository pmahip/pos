import { TestBed, inject } from '@angular/core/testing';

import { ProductmasterService } from './productmaster.service';

describe('ProductmasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductmasterService]
    });
  });

  it('should be created', inject([ProductmasterService], (service: ProductmasterService) => {
    expect(service).toBeTruthy();
  }));
});
