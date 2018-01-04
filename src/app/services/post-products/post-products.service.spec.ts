import { TestBed, inject } from '@angular/core/testing';

import { PostProductsService } from './post-products.service';

describe('PostProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostProductsService]
    });
  });

  it('should be created', inject([PostProductsService], (service: PostProductsService) => {
    expect(service).toBeTruthy();
  }));
});
