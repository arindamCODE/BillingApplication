import { TestBed, inject } from '@angular/core/testing';

import { UpdateProductsService } from './update-products.service';

describe('UpdateProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateProductsService]
    });
  });

  it('should be created', inject([UpdateProductsService], (service: UpdateProductsService) => {
    expect(service).toBeTruthy();
  }));
});
