/**
 * Created by edwinfranco on 17/07/17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { ServiceSecurityModel } from '../service_security';

@Injectable()
export class ServiceSecuritService {
  serviceSecurity: ServiceSecurityModel[] = [];
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(communicationStandardId: string, id: string, name: string): string{
    let body = JSON.stringify({
      'communicationStandardId': communicationStandardId,
      'id': id,
      'name': name
    });
    return body;
  }

  //ServiceSecurity
  getServiceSecurity(): Observable<ServiceSecurityModel[]> {
    this.serviceSecurity = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_SERVICE_SECURITY, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.serviceSecurity.push(new ServiceSecurityModel(item.communicationStandardId, item.id, item.name));
        });
        return this.serviceSecurity;
      });
  }

  postServiceSecurity(communicationStandardId: string, id: string, name: string): Observable<ServiceSecurityModel>{
    let body = this.createBody(communicationStandardId, id, name);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_SERVICE_SECURITY, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ServiceSecurityModel(res.communicationStandardId, res.id, res.name);
      });
  }

  putServiceSecurity(communicationStandardId: string, id: string, name: string): Observable<ServiceSecurityModel>{
    let body = this.createBody(communicationStandardId, id, name);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_SERVICE_SECURITY, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ServiceSecurityModel(res.communicationStandardId, res.id, res.name);
      });
  }

  deleteServiceSecurity(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_SERVICE_SECURITY + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getServiceSecurityId(id: string): Observable<ServiceSecurityModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_SERVICE_SECURITY + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ServiceSecurityModel(res.communicationStandardId, res.id, res.name);
      });
  }
}
