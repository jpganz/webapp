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
import {ProviderCommandModel} from '../provider_command';

@Injectable()
export class ProviderCommandService {
  providerCommands: ProviderCommandModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(code: string, commandId: string, communicationStandardId: string, endPointUrl: string, id: string, providerId: string, retryInterval: string, retryLimit: string, serviceSecurityId: string): string{
    let body = JSON.stringify({
      'code': code,
      'commandId': commandId,
      'communicationStandardId': communicationStandardId,
      'endPointUrl': endPointUrl,
      'id': id,
      'providerId': providerId,
      'retryInterval': retryInterval,
      'retryLimit': retryLimit,
      'serviceSecurityId': serviceSecurityId
    });
    return body;
  }

  getProviderCommand(): Observable<ProviderCommandModel[]> {
    this.providerCommands = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.providerCommands.push(new ProviderCommandModel(item.code, item.commandId, item.communicationStandardId, item.endPointUrl, item.id, item.providerId, item.retryInterval, item.retryLimit, item.serviceSecurityId));
        });
        return this.providerCommands;
      });
  }

  postProviderCommand(code: string, commandId: string, communicationStandardId: string, endPointUrl: string, id: string, providerId: string, retryInterval: string, retryLimit: string, serviceSecurityId: string): Observable<ProviderCommandModel>{
    let body = this.createBody(code, commandId, communicationStandardId, endPointUrl, id, providerId, retryInterval, retryLimit, serviceSecurityId);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderCommandModel(res.code, res.commandId, res.communicationStandardId, res.endPointUrl, res.id, res.providerId, res.retryInterval, res.retryLimit, res.serviceSecurityId);
      });
  }

  putProviderCommand(code: string, commandId: string, communicationStandardId: string, endPointUrl: string, id: string, providerId: string, retryInterval: string, retryLimit: string, serviceSecurityId: string): Observable<ProviderCommandModel>{
    let body = this.createBody(code, commandId, communicationStandardId, endPointUrl, id, providerId, retryInterval, retryLimit, serviceSecurityId);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderCommandModel(res.code, res.commandId, res.communicationStandardId, res.endPointUrl, res.id, res.providerId, res.retryInterval, res.retryLimit, res.serviceSecurityId);
      });
  }

  deleteProviderCommand(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND + "/" + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getProviderCommandId(id: string): Observable<ProviderCommandModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER_COMMAND + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderCommandModel(res.code, res.commandId, res.communicationStandardId, res.endPointUrl, res.id, res.providerId, res.retryInterval, res.retryLimit, res.serviceSecurityId);
      });
  }

}
