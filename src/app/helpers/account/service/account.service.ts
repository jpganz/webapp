/**
 * Created by edwinfranco on 13/07/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { AccountModel } from '../account';

@Injectable()
export class AccountService {
  account: AccountModel;
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  getAccount(): Observable<AccountModel> {
    this.account;
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_ACCOUNT, this.options)
      .map((response: Response) => {
        const res = response.json();
        this.account = new AccountModel(res.id, res.login, res.firstName, res.lastName, res.email, res.imageUrl,
          res.activated, res.langKey, res.createdBy, res.createdDate, res.lastModifiedBy, res.lastModifiedDate,
          res.authorities);
        return this.account;
      });
  }
  postAccount(id: number, login: string, firstName: string, lastName: string, email: string, imageUrl: string,
              activated: boolean, langKey: string, createdBy: string, createdDate: string, lastModifiedBy: string,
              lastModifiedDate: string, authorities: string[]): Observable<Response> {
    let body = JSON.stringify(
      {
        'id': id,
        'login': login,
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'imageUrl': imageUrl,
        'activated': activated,
        'langKey': langKey,
        'createdBy': createdBy,
        'createdDate': createdDate,
        'lastModifiedBy': lastModifiedBy,
        'lastModifiedDate': lastModifiedDate,
        'authorities': authorities
      }
    );

    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_ACCOUNT, body, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  postChangePassword(password: string): Observable<Response> {
    let body = JSON.stringify({
      'password': password
    });
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_ACCOUNT +
      AppConfig.API_CHANGE_PASSWORD, body, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  postReset_passwordFinish(key: string, newPassword: string): Observable<Response> {
    let body = JSON.stringify({
      'key': key,
      'newPassword': newPassword
    });
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_ACCOUNT +
      AppConfig.API_RESET_PASSWORD, body, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  postReset_passwordInit(mail: string): Observable<Response> {
    let body = JSON.stringify({
      'mail': mail
    });
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_ACCOUNT +
      AppConfig.API_RESET_PASSWORDINIT, body, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  postRegister(password: string, id: number, login: string, firstName: string, lastName: string, email: string,
               imageUrl: string, activated: boolean, langKey: string, createdBy: string, createdDate: string,
               lastModifiedBy: string, lastModifiedDate: string, authorities: string[]): Observable<Response> {
    let body = JSON.stringify(
      {
        'id': id,
        'login': login,
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'imageUrl': imageUrl,
        'activated': activated,
        'langKey': langKey,
        'createdBy': createdBy,
        'createdDate': createdDate,
        'lastModifiedBy': lastModifiedBy,
        'lastModifiedDate': lastModifiedDate,
        'authorities': authorities,
        'password': password
      }
    );

    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_REGISTER, body, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getAuthenticate(): Observable<Response> {
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_AUTHENTICATE, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getActivate(key: string): Observable<Response> {
    let body = JSON.stringify({
      'key': key
    });
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_ACTIVATE + '?key=' + key, this.options)
      .map((response: Response) => {
        return response;
      });
  }

}
