import { Injectable } from '@angular/core';
import {  ProductTable} from '../../models/productTable';
import { HttpClientService } from '../../services';

@Injectable()
export class PostProductsService {
  purchase: boolean;
  id: number;
  productName: string;
  price: number;
  url: string;
  product: ProductTable;

  constructor(private httpClientService: HttpClientService) {
    this.purchase = false;
    this.url = 'http://localhost:3004/productTable';
  }

  postProducts(id: number, productName: string, price: number) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.product = new ProductTable(this.id, this.productName, this.price, this.purchase);
    return this.httpClientService.postData(this.product, this.url);

  }


}
