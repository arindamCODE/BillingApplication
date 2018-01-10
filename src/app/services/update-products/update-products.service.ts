import { Injectable } from '@angular/core';
import { ProductTable } from '../../models/productTable';
import { HttpClientService } from '../http-client/http-client.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class UpdateProductsService {

  url: string;
  urlToUpdate: string;
  constructor(private httpClientService: HttpClientService) {
    this.url = environment.url;
  }

  buy(product: ProductTable) {
    this.urlToUpdate = `${this.url}/${product.id}`;
    return this.httpClientService.putData(product, this.urlToUpdate);
  }

  cancel(product: ProductTable) {
    this.urlToUpdate = `${this.url}/${product.id}`;
    return this.httpClientService.putData(product, this.urlToUpdate);
  }

}
