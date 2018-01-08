import { Injectable } from '@angular/core';
import { ProductTable } from '../../models/productTable';
import { HttpClientService } from '../../services';
import { environment } from '../../../environments/environment';

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
    this.url = environment.url;
  }
  postProducts(product: ProductTable) {
    return this.httpClientService.post(product, this.url);
  }
}
