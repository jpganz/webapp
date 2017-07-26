/**
 * Created by edwinfranco on 17/07/17.
 */
/**
 * Created by edwinfranco on 14/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { TryResposeParameterModel } from '../try_response_parameter';

@Injectable()
export class TryResponseParameterService {
  tryresponseparameter: TryResposeParameterModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(id: string, requestTryId: string, responseParameterId: string, value: string): string{
    let body = JSON.stringify({
      'id': id,
      'requestTryId': requestTryId,
      'responseParameterId': responseParameterId,
      'value': value
    });
    return body;
  }

  getTryResponseParameter(): Observable<TryResposeParameterModel[]> {
    this.tryresponseparameter = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_RESPONSE_PARAMETER, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.tryresponseparameter.push(new TryResposeParameterModel(item.id, item.requestTryId, item.responseParameterId, item.value));
        });
        return this.tryresponseparameter;
      });
  }

  postTryResponseParameter(id: string, requestTryId: string, responseParameterId: string, value: string): Observable<TryResposeParameterModel>{
    let body = this.createBody(id, requestTryId, responseParameterId, value);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_RESPONSE_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new TryResposeParameterModel(res.id, res.requestTryId, res.responseParameterId, res.value);
      });
  }

  putTryResponseParameter(id: string, requestTryId: string, responseParameterId: string, value: string): Observable<TryResposeParameterModel>{
    let body = this.createBody(id, requestTryId, responseParameterId, value);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_RESPONSE_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new TryResposeParameterModel(res.id, res.requestTryId, res.responseParameterId, res.value);
      });
  }

  deleteTryResponseParameter(id: string): Observable<Response>{
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_RESPONSE_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getTryResponseParameterId(id: string): Observable<TryResposeParameterModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_TRY_RESPONSE_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new TryResposeParameterModel(res.id, res.requestTryId, res.responseParameterId, res.value);
      });
  }
}
