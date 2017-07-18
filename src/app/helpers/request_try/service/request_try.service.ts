/**
 * Created by edwinfranco on 14/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { RequestTryModel } from '../request_try';

@Injectable()
export class RequestTryService {
  requestTry: RequestTryModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(id: string, requestId: string, status: number): string{
    let body = JSON.stringify({
      'id': id,
      'requestId': requestId,
      'status': status
    });
    return body;
  }
  //RequestTry

  getRequestTry(): Observable<RequestTryModel[]> {
    this.requestTry = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_TRY, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.requestTry.push(new RequestTryModel(item.id, item.requestId, item.status));
        });
        return this.requestTry;
      });
  }

  postRequestTry(id: string, requestId: string, status: number): Observable<RequestTryModel>{
    let body = this.createBody(id, requestId, status);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_TRY, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestTryModel(res.id, res.requestId, res.status);
      });
  }

  putRequestTry(id: string, requestId: string, status: number): Observable<RequestTryModel>{
    let body = this.createBody(id, requestId, status);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_TRY, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestTryModel(res.id, res.requestId, res.status);
      });
  }

  deleteRequestTry(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_TRY + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getRequestTryId(id: string): Observable<RequestTryModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_TRY + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestTryModel(res.id, res.requestId, res.status);
      });
  }
}
