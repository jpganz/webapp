/**
 * Created by juanlopez on 12/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { ProviderModel } from '../provider';

@Injectable()
export class ProvidersService {
  providers: ProviderModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(code: string, description: string, id: string, name: string): string{
    let body = JSON.stringify({
      'code': code,
      'description': description,
      'id': id,
      'name': name
    });
    return body;
  }

  getProviders(): Observable<ProviderModel[]> {
    this.providers = [];

    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.providers.push(new ProviderModel(item.id, item.name, item.description,
            item.code));
        });
        return this.providers;
      });
  }

  postProviders(code: string, description: string, id: string, name: string): Observable<ProviderModel>{
    let body = this.createBody(code, description, id, name);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderModel(res.id, res.name, res.description, res.code);
      });
  }

  putProviders(code: string, description: string, id: string, name: string): Observable<ProviderModel>{
    let body = this.createBody(code, description, id, name);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderModel(res.id, res.name, res.description, res.code);
      });
  }

  deleteProviders(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getProvidersId(id: string): Observable<ProviderModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_PROVIDER + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new ProviderModel(res.id, res.name, res.description, res.code);
      });
  }
}
