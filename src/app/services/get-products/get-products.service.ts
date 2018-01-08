import { Injectable } from '@angular/core';
import { ProductTable } from '../../models/productTable';
import { HttpClientService } from '../http-client/http-client.service';
import { environment } from '../../../environments/environment';


@Injectable()
export class GetProductsService {
  public product: ProductTable[];
  public url: string;

  constructor(private http: HttpClientService) {
    this.url = environment.url;
   }

   getDetails() {
    return this.http.getData(this.url, null);
  }

}
