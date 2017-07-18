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
import {ProviderResponsesModel} from '../provider_responses';

@Injectable()
export class ProviderResponsesService {
  providerResponses: ProviderResponsesModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(addToRetry: boolean, emailAddressToNotify: string, emailNotify: string, id: string, providerCommandId: string, type: string): string{
    let body = JSON.stringify({
      'addToRetry' : addToRetry,
      'emailAddressToNotify' : emailAddressToNotify,
      'emailNotify': emailNotify,
      'id': id,
      'providerCommandId': providerCommandId,
      'type': type

    });
    return body;
  }

  getProviderResponses(): Observable<ProviderResponsesModel[]> {
    this.providerResponses = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_RESPONSES, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.providerResponses.push(new ProviderResponsesModel(item.addToRetry, item.emailAddressToNotify, item.emailNotify, item.id, item.providerCommandId, item.type));
        });
        return this.providerResponses;
      });
  }

  postProviderResponses(addToRetry: boolean, emailAddressToNotify: string, emailNotify: string, id: string, providerCommandId: string, type: string): Observable<ProviderResponsesModel>{
    let body = this.createBody(addToRetry, emailAddressToNotify, emailNotify, id, providerCommandId, type);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_RESPONSES, body, this.options)
      .map((response: Response) => {
        const item = response.json();
        return new ProviderResponsesModel(item.addToRetry, item.emailAddressToNotify, item.emailNotify, item.id, item.providerCommandId, item.type);
      });
  }

  putProviderResponses(addToRetry: boolean, emailAddressToNotify: string, emailNotify: string, id: string, providerCommandId: string, type: string): Observable<ProviderResponsesModel>{
    let body = this.createBody(addToRetry, emailAddressToNotify, emailNotify, id, providerCommandId, type);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_RESPONSES, body, this.options)
      .map((response: Response) => {
        const item = response.json();
        return new ProviderResponsesModel(item.addToRetry, item.emailAddressToNotify, item.emailNotify, item.id, item.providerCommandId, item.type);
      });
  }

  deleteProviderResponses(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_RESPONSES + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getProviderResponsesId(id: string): Observable<ProviderResponsesModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_RESPONSES + '/' + id, this.options)
      .map((response: Response) => {
        const item = response.json();
        return new ProviderResponsesModel(item.addToRetry, item.emailAddressToNotify, item.emailNotify, item.id, item.providerCommandId, item.type);
      });
  }
}
