/**
 * Created by edwinfranco on 17/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { TryParameterModel } from '../try_parameter';

@Injectable()
export class TryParameterService {
  tryparameter: TryParameterModel[] = [];
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(id: string, requestId: string, requestParameterId: string, value: string): string{
    let body = JSON.stringify({
      'id': id,
      'requestId': requestId,
      'requestParameterId': requestParameterId,
      'value': value
    });
    return body;
  }

  /*TryParameter*/

  getTryParameter(): Observable<TryParameterModel[]> {
    this.tryparameter = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_PARAMETER, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.tryparameter.push(new TryParameterModel(res.id, res.requestId, res.requestParameterId, res.value));
        });
        return this.tryparameter;
      });
  }

  postTryParameter(id: string, requestId: string, requestParameterId: string, value: string): Observable<TryParameterModel>{
    let body = this.createBody(id, requestId, requestParameterId, value);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new TryParameterModel(res.id, res.requestId, res.requestParameterId, res.value);
      });
  }

  putTryParameter(id: string, requestId: string, requestParameterId: string, value: string): Observable<TryParameterModel>{
    let body = this.createBody(id, requestId, requestParameterId, value);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new TryParameterModel(res.id, res.requestId, res.requestParameterId, res.value);
      });
  }

  deleteTryParameter(id: string): Observable<Response>{
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getTryParameterId(id: string): Observable<TryParameterModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new TryParameterModel(res.id, res.requestId, res.requestParameterId, res.value);
      });
  }
}
