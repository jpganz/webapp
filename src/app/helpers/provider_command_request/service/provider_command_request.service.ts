/**
 * Created by edwinfranco on 14/07/17.
 */

/**
 * Created by edwinfranco on 14/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { ProviderCommandModel } from '../provider_command_request';

@Injectable()
export class ProviderCommandRequestService {
  providerCommandRequest: ProviderCommandModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(id: string, providerCommandId: string, requestId: string){
    let body = JSON.stringify({
      'id' : id,
      'providerCommandId' : providerCommandId,
      'requestId' : requestId
    });
    return body;
  }

  getProviderCommandRequest(): Observable<ProviderCommandModel[]> {
    this.providerCommandRequest = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND_REQUEST, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
        this.providerCommandRequest.push(new ProviderCommandModel(item.id, item.providerCommandId, item.requestId));});
        return this.providerCommandRequest;
      });
  }

  postProviderCommandRequest(id: string, providerCommandId: string, requestId: string): Observable<ProviderCommandModel>{
    let body = this.createBody(id, providerCommandId, requestId);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND_REQUEST, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderCommandModel(res.id, res.providerCommandId, res.requestId);
      });
  }

  putProviderCommandRequest(id: string, providerCommandId: string, requestId: string): Observable<ProviderCommandModel>{
    let body = this.createBody(id, providerCommandId, requestId);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND_REQUEST, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderCommandModel(res.id, res.providerCommandId, res.requestId);
      });
  }

  deleteProviderCommandRequest(id: string): Observable<Response>{
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND_REQUEST + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getProviderCommandRequestId(id: string): Observable<ProviderCommandModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND_REQUEST + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderCommandModel(res.id, res.providerCommandId, res.requestId);
      });
  }
}
