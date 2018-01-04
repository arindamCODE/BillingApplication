import { Injectable } from '@angular/core';
import { ProductTable } from '../../models/productTable';
import { HttpClientService } from '../http-client/http-client.service';


@Injectable()
export class GetProductsService {
  public product: ProductTable[];
  public url: string;

  constructor(private http: HttpClientService) {
    this.url = 'http://localhost:3004/productTable';
   }

   getDetails() {
    return this.http.getData(this.url, null);
  }

}
