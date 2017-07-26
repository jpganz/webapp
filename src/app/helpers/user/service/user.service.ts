/**
 * Created by edwinfranco on 17/07/17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../../config';
import { UserModel } from '../user';

@Injectable()
export class UserService {
  users: UserModel[] = [];
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  createBody(activated: boolean, authorities: string[], createdBy: string, createdDate: string, email: string, firstName: string, id: string, imageUrl: string, langKey: string, lastModifiedBy: string, lastModifiedDate: string, lastName: string, login: string): string{
    let body = JSON.stringify({
      'activated': activated,
      'authorities': authorities,
      'createdBy': createdBy,
      'createdDate': createdDate,
      'email': email,
      'firstName': firstName,
      'id': id,
      'imageUrl': imageUrl,
      'langKey': langKey,
      'lastModifiedBy': lastModifiedBy,
      'lastModifiedDate': lastModifiedDate,
      'lastName': lastName,
      'login': login
    });
    return body;
  }

  /* Users */

  getUsers(): Observable<UserModel[]> {
    this.users = [];
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_USER, this.options)
      .map((response: Response) => {
        const res = response.json();
        res.forEach((item, index) => {
          this.users.push(new UserModel(item.activated, item.authorities, item.createdBy, item.createdDate, item.email, item.firstName, item.id, item.imageUrl, item.langKey, item.lastModifiedBy, item.lastModifiedDate, item.lastName, item.login));
        });
        return this.users;
      });
  }

  postUsers(activated: boolean, authorities: string[], createdBy: string, createdDate: string, email: string, firstName: string, id: string, imageUrl: string, langKey: string, lastModifiedBy: string, lastModifiedDate: string, lastName: string, login: string): Observable<UserModel>{
    let body = this.createBody(activated, authorities, createdBy, createdDate, email, firstName, id, imageUrl, langKey, lastModifiedBy, lastModifiedDate, lastName, login);
    return this.http.post(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_USER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new UserModel(res.activated, res.authorities, res.createdBy, res.createdDate, res.email, res.firstName, res.id, res.imageUrl, res.langKey, res.lastModifiedBy, res.lastModifiedDate, res.lastName, res.login);
      });
  }


  putUsers(activated: boolean, authorities: string[], createdBy: string, createdDate: string, email: string, firstName: string, id: string, imageUrl: string, langKey: string, lastModifiedBy: string, lastModifiedDate: string, lastName: string, login: string): Observable<UserModel>{
    let body = this.createBody(activated, authorities, createdBy, createdDate, email, firstName, id, imageUrl, langKey, lastModifiedBy, lastModifiedDate, lastName, login);
    return this.http.put(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_USER, body, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new UserModel(res.activated, res.authorities, res.createdBy, res.createdDate, res.email, res.firstName, res.id, res.imageUrl, res.langKey, res.lastModifiedBy, res.lastModifiedDate, res.lastName, res.login);
      });
  }

  getUsersAuthorities(): Observable<Response> {
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_USER + AppConfig.API_USER_AUTHORITIES, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  deleteUser(login: string): Observable<Response>{
    return this.http.delete(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_USER + '/' + login, this.options)
      .map((response: Response) => {
        return response;
      });
  }

  getUsersId(login: string): Observable<UserModel>{
    return this.http.get(AppConfig.API_BASE_URL + AppConfig.API + AppConfig.API_USER + '/' + login, this.options)
      .map((response: Response) => {
        const res = response.json();
        return new UserModel(res.activated, res.authorities, res.createdBy, res.createdDate, res.email, res.firstName, res.id, res.imageUrl, res.langKey, res.lastModifiedBy, res.lastModifiedDate, res.lastName, res.login);
      });
  }
}
