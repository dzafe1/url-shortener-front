import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin} from 'rxjs';
import {UrlModel} from './url.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class MainService {

  constructor(private http: HttpClient) {
  }

  processFullUrl(urlModel: UrlModel) {
    return forkJoin(
      this.http.post('/api/url', urlModel)
    );
  }
 }
