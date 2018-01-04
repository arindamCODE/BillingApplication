import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClientService {
  header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
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

}
