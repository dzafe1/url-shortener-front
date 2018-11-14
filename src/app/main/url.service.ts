import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlModel} from './url.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UrlService {

  constructor(private http: HttpClient) {
  }

  processFullUrl(urlModel: any): Observable<UrlModel> {
    return this.http.post<UrlModel>('/api/url', urlModel, httpOptions);
  }

  processCustomUrl(urlModel: any): Observable<UrlModel> {
    return this.http.post<UrlModel>('/api/custom-url', urlModel, httpOptions);
  }
}
