/**
 * Created by edwinfranco on 14/07/17.
 */


import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import {RequestModel} from '../request';

@Injectable()
export class Requestervice {
  request: RequestModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(annexedNumber: number, clientName: string, clientNumber: number, dateTime: string, eventConfirmation: string, id: string, nextTryBy: string, requestAmount: number, requestStatus: number, serviceCode: string, statusRequested: string): string{
    let body = JSON.stringify({
      'annexedNumber': annexedNumber,
      'clientName': clientName,
      'clientNumber': clientNumber,
      'dateTime': dateTime,
      'eventConfirmation': eventConfirmation,
      'id': id,
      'nextTryBy': nextTryBy,
      'requestAmount': requestAmount,
      'requestStatus': requestStatus,
      'serviceCode': serviceCode,
      'statusRequested': statusRequested
    });
    return body;
  }

  getRequest(): Observable<RequestModel[]> {
    this.request = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.request.push(new RequestModel(item.annexedNumber, item.clientName, item.clientNumber, item.dateTime, item.eventConfirmation, item.id, item.nextTryBy, item.requestAmount, item.requestStatus, item.serviceCode, item.statusRequested));
        });
        return this.request;
      });
  }

  postRequest(annexedNumber: number, clientName: string, clientNumber: number, dateTime: string, eventConfirmation: string, id: string, nextTryBy: string, requestAmount: number, requestStatus: number, serviceCode: string, statusRequested: string): Observable<RequestModel>{
    let body = this.createBody(annexedNumber, clientName, clientNumber, dateTime, eventConfirmation, id, nextTryBy, requestAmount, requestStatus, serviceCode, statusRequested);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestModel(res.annexedNumber, res.clientName, res.clientNumber, res.dateTime, res.eventConfirmation, res.id, res.nextTryBy, res.requestAmount, res.requestStatus, res.serviceCode, res.statusRequested);
      });
  }


  putRequest(annexedNumber: number, clientName: string, clientNumber: number, dateTime: string, eventConfirmation: string, id: string, nextTryBy: string, requestAmount: number, requestStatus: number, serviceCode: string, statusRequested: string): Observable<RequestModel>{
    let body = this.createBody(annexedNumber, clientName, clientNumber, dateTime, eventConfirmation, id, nextTryBy, requestAmount, requestStatus, serviceCode, statusRequested);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestModel(res.annexedNumber, res.clientName, res.clientNumber, res.dateTime, res.eventConfirmation, res.id, res.nextTryBy, res.requestAmount, res.requestStatus, res.serviceCode, res.statusRequested);
      });
  }

  deleteRequest(id: string): Observable<Response>{
    let body = JSON.stringify({
      'id' : id
    });
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST + '/' + id, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getCommandsId(id: string): Observable<RequestModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REQUEST + '/' + id, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new RequestModel(res.annexedNumber, res.clientName, res.clientNumber, res.dateTime, res.eventConfirmation, res.id, res.nextTryBy, res.requestAmount, res.requestStatus, res.serviceCode, res.statusRequested);
      });
  }

}
