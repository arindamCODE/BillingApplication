import { Injectable } from '@angular/core';
import { ProductTable } from '../../models/productTable';
import { HttpClientService } from '../../services';

@Injectable()
export class PostProductsService {
  id: number;
  productName: string;
  price: number;
  purchase: boolean;
  url: string;
  product: ProductTable;
  constructor(private httpClientService: HttpClientService) {
    this.purchase = false;
    this.url = 'http://localhost:3004/productTable';
  }
  postProducts(product: ProductTable) {
    return this.httpClientService.post(product, this.url);
  }
}
