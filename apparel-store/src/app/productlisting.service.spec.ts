import { TestBed, inject } from '@angular/core/testing';

import { ProductlistingService } from './productlisting.service';

describe('ProductlistingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductlistingService]
    });
  });

  it('should be created', inject([ProductlistingService], (service: ProductlistingService) => {
    expect(service).toBeTruthy();
  }));
});
