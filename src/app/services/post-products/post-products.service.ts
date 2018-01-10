import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { PostProductTable } from '../../models/postProductTable';
import { HttpClientService } from '../http-client/http-client.service';

@Injectable()
export class PostProductsService {
  id: number;
  productName: string;
  price: number;
  purchase: boolean;
  url: string;
  product: PostProductTable;
  constructor(private httpClientService: HttpClientService) {
    this.purchase = false;
    this.url = environment.url;
  }
  postProducts(product: PostProductTable) {
    return this.httpClientService.post(product, this.url);
  }
}
