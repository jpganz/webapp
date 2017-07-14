/**
 * Created by edwinfranco on 14/07/17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import {CommunicationModel} from '../communication_standard';

@Injectable()
export class CommunicationService {
  communicationStandard: CommunicationModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(id: string, name: string): string{
    let body = JSON.stringify({
      'id' : id,
      'name' : name
    });
    return body;
  }

  getCommunication(): Observable<CommunicationModel[]> {
    this.communicationStandard = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMUNICATION, this.options)
      .map((response: Response) => {
        const res = response.json();
        console.log(response);
        res.forEach((item, index) => {
          this.communicationStandard.push(new CommunicationModel(item.id, item.name));
        });
        return this.communicationStandard;
      });
  }

  postCommunication(id: string, name: string): Observable<CommunicationModel>{
    let body = this.createBody(id, name);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMUNICATION, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new CommunicationModel(res.id, res.name);
      });
  }

  putCommunication(id: string, name: string): Observable<CommunicationModel>{
    let body = this.createBody(id, name);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMUNICATION, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new CommunicationModel(res.id, res.name);
      });
  }

  DeleteCommunication(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMUNICATION + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getCommunicationId(id: string): Observable<CommunicationModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_COMMUNICATION + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new CommunicationModel(res.id, res.name);
      });
  }
}
