/**
 * Created by edwinfranco on 14/07/17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import {RequestParameterModel} from '../request_parameter';

@Injectable()
export class RequestParameterService {
  requestParameters: RequestParameterModel[] = [];
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }
  //RequestParameter
  createBody(defaultValue: string, id: string, isMandatory: string, name: string, providerCommandId: string, section: string, type: string): string{
    let body = JSON.stringify({
      'defaultValue': defaultValue,
      'id': id,
      'isMandatory': isMandatory,
      'name': name,
      'providerCommandId': providerCommandId,
      'section': section,
      'type': type
    });
    return body;
  }

  getRequestParameter(): Observable<RequestParameterModel[]> {
    this.requestParameters = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_PARAMETER, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.requestParameters.push(new RequestParameterModel(item.defaultValue, item.id, item.isMandatory, item.name, item.providerCommandId, item.section, item.type));
        });
        return this.requestParameters;
      });
  }

  postRequestParameter(defaultValue: string, id: string, isMandatory: string, name: string, providerCommandId: string, section: string, type: string): Observable<RequestParameterModel>{
    let body = this.createBody(defaultValue, id, isMandatory, name, providerCommandId, section, type);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestParameterModel(res.defaultValue, res.id, res.isMandatory, res.name, res.providerCommandId, res.section, res.type);
      });
  }

  putRequestParameter(defaultValue: string, id: string, isMandatory: string, name: string, providerCommandId: string, section: string, type: string): Observable<RequestParameterModel>{
    let body = this.createBody(defaultValue, id, isMandatory, name, providerCommandId, section, type);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestParameterModel(res.defaultValue, res.id, res.isMandatory, res.name, res.providerCommandId, res.section, res.type);
      });
  }

  deleteRequestParameter(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getRequestParameterId(id: string): Observable<RequestParameterModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestParameterModel(res.defaultValue, res.id, res.isMandatory, res.name, res.providerCommandId, res.section, res.type);
      });
  }

}
