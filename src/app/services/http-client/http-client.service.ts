import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ProductTable } from '../../models/productTable';
import { PostProductTable } from '../../models/postProductTable';

@Injectable()
export class HttpClientService {
  header: HttpHeaders;
  public product: ProductTable;
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
  post<T>(product: PostProductTable, url: string) {
    return this.http.post(url, product).map((response: HttpResponse<T>) => {
      const body = response || null;
      return body;
    }).catch(this.handleError);
  }
}
