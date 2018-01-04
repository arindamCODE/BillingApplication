import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ProductTable } from '../../models/productTable';

@Injectable()
export class HttpClientService {
  header: HttpHeaders;
  product: ProductTable;
  path: string;
  params: HttpParams;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
    this.params = null;
  }

  getData<T>(path: string, params: HttpParams) {
    return this.http.get(path, { headers: this.header, params: params }).
      map((response: HttpResponse<T>) => {
        const body = response || null;
        return body;
      }).catch(this.handleError);
  }

  private handleError<T>(error: HttpResponse<T>): Observable<T> {
    let errMsg: string;
    errMsg = `${error.status} - ${error.statusText || ''}`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  postData<T>(product: ProductTable, path: string) {
    this.product = product;
    this.path = path;
    return this.http.post(this.path, this.header, { headers: this.header }).map((response: HttpResponse<T>) => {
      const body = response || null;
      return body;
    }).catch(this.handleError);
  }

}
