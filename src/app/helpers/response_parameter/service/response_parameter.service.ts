/**
 * Created by edwinfranco on 14/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { ResponseParameterModel } from '../response_parameter';

@Injectable()
export class ResponseParameterService {
  responseParemaeter: ResponseParameterModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(default_value: string, id: string, isMandatory: boolean, name: string, providerResponseId: string, section: string, type: string): string{
    let body = JSON.stringify({
      'default_value': default_value,
      'id': id,
      'isMandatory': isMandatory,
      'name': name,
      'providerResponseId': providerResponseId,
      'section': section,
      'type': type
    });
    return body;
  }

  //ResponseParameter

  getResponseParameter(): Observable<ResponseParameterModel[]> {
    this.responseParemaeter = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_RESPONCE_PARAMETER, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.responseParemaeter.push(new ResponseParameterModel(item.default_value, item.id, item.isMandatory, item.name, item.providerResponseId, item.section, item.type));
        });
        return this.responseParemaeter;
      });
  }

  postResponseParameter(default_value: string, id: string, isMandatory: boolean, name: string, providerResponseId: string, section: string, type: string): Observable<ResponseParameterModel>{
    let body = this.createBody(default_value, id, isMandatory, name, providerResponseId, section, type);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_RESPONCE_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ResponseParameterModel(res.default_value, res.id, res.isMandatory, res.name, res.providerResponseId, res.section, res.type);
      });
  }

  putResponseParameter(default_value: string, id: string, isMandatory: boolean, name: string, providerResponseId: string, section: string, type: string): Observable<ResponseParameterModel>{
    let body = this.createBody(default_value, id, isMandatory, name, providerResponseId, section, type);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_RESPONCE_PARAMETER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ResponseParameterModel(res.default_value, res.id, res.isMandatory, res.name, res.providerResponseId, res.section, res.type);
      });
  }

  deleteResponseParameter(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_RESPONCE_PARAMETER +'/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getResponseParameterId(id: string): Observable<ResponseParameterModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_RESPONCE_PARAMETER + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ResponseParameterModel(res.default_value, res.id, res.isMandatory, res.name, res.providerResponseId, res.section, res.type);
      });
  }
}
